import { withGraphApi } from "@/lib/graph-api";

export async function GET() {
  return withGraphApi((api) => api.getAlbums());
}
