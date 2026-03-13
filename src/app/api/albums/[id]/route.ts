import { withGraphApi } from "@/lib/graph-page";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    return withGraphApi((api) => api.getSingleAlbum(params.id));
}
