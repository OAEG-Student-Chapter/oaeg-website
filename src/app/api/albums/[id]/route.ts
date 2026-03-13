import { withGraphApi } from "@/lib/graph-page";

export async function GET(
    request: Request,
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    return withGraphApi((api) => api.getSingleAlbum(params.id));
}
