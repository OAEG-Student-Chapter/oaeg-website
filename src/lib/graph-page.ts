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

    async gatherResponse(response: Response) {
        const { headers } = response;
        const contentType = headers.get("content-type") || "";
        if (contentType.includes("application/json")) {
            return JSON.stringify(await response.json());
        }
        return response.text();
    }
  
    private async _get(endpoint: string) {
        // remove the leading slash from the endpoint
        endpoint = endpoint.replace(/^\//, "");
        const res = await fetch(
            `https://graph.facebook.com/${this.version}/${endpoint}&access_token=${this.access_token}`,
            this.init
        );
        const result = await this.gatherResponse(res);
        return result;
    }

    async getAlbums() {
        return await this._get(`${this.page_id}/albums?fields=id,name,link,created_time,type,cover_photo{webp_images}`);
    }

    async getSingleAlbum(albumId: string) {
        return await this._get(`${albumId}?fields=id,name,link,description,cover_photo{webp_images},photos{webp_images}`);
    }
}
