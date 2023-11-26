class GraphPageApi {
  private readonly access_token: string;
  private readonly version: string;
  readonly page_id: string;

  constructor(access_token: string, version: string, page_id: string) {
    this.access_token = access_token;
    this.version = version;
    this.page_id = page_id;
  }

  async get(endpoint: string) {
    // remove the leading slash from the endpoint
    endpoint = endpoint.replace(/^\//, "");
    const res = await fetch(
      `https://graph.facebook.com/${this.version}/${endpoint}&access_token=${this.access_token}`,
        {cache: 'no-store'}
    );
    return await res.json();
  }
}

export const graph = new GraphPageApi(
  process.env.FB_PAGE_ACCESS_TOKEN!,
  "v17.0",
  "1431417997070793"
);
