import { withGraphApi } from "@/lib/graph-page";

export async function GET() {
    return withGraphApi((api) => api.getAlbums());
}