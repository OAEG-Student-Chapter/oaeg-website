import { withGraphApi } from "@/lib/graph-page";

export async function GET(
    props: { params: Promise<{ id: string }> }
) {
    const params = await props.params;
    return withGraphApi((api) => api.getSingleAlbum(params.id));
}
