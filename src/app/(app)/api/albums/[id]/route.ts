import { withGraphApi } from "@/lib/graph-page";
import { NextRequest } from "next/server";

export async function GET(
  request: NextRequest,
  props: { params: Promise<{ id: string }> },
) {
  const params = await props.params;
  return withGraphApi((api) => api.getSingleAlbum(params.id));
}
