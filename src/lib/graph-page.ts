import { NextResponse } from "next/server";

export default class GraphPageApi {
  private readonly access_token: string;
  private readonly version: string;
  readonly page_id: string;

  private readonly init = {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  };

  constructor(access_token: string, version: string, page_id: string) {
    this.access_token = access_token;
    this.version = version;
    this.page_id = page_id;
  }

  private async _get(endpoint: string) {
    // remove the leading slash from the endpoint
    endpoint = endpoint.replace(/^\//, "");
    const res = await fetch(
      `https://graph.facebook.com/${this.version}/${endpoint}&access_token=${this.access_token}`,
      this.init,
    );

    if (!res.ok) {
      const error = await res.json();
      throw new Error(
        error?.error?.message || "Failed to fetch from Facebook Graph API",
      );
    }

    return await res.json();
  }

  async getAlbums() {
    return await this._get(
      `${this.page_id}/albums?fields=id,name,link,created_time,type,cover_photo{webp_images}`,
    );
  }

  async getSingleAlbum(albumId: string) {
    return await this._get(
      `${albumId}?fields=id,name,link,description,cover_photo{webp_images},photos{webp_images}`,
    );
  }
}

export function getGraphApi() {
  const PAGE_ID = process.env.FB_PAGE_ID || "1431417997070793";
  const ACCESS_TOKEN = process.env.FB_PAGE_ACCESS_TOKEN;

  if (!ACCESS_TOKEN) {
    throw new Error("Token not configured");
  }

  return new GraphPageApi(ACCESS_TOKEN, "v17.0", PAGE_ID);
}

export async function withGraphApi(
  handler: (api: GraphPageApi) => Promise<any>,
) {
  try {
    const api = getGraphApi();
    const result = await handler(api);
    return NextResponse.json(result);
  } catch (e) {
    console.error("API Error:", e);
    return NextResponse.json(
      { error: (e as Error).message },
      { status: (e as Error).message === "Token not configured" ? 500 : 400 },
    );
  }
}
