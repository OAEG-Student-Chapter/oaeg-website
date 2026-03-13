import { getCloudflareContext } from "@opennextjs/cloudflare";
import { drizzle } from "drizzle-orm/d1";

export const getDb = () => {
  // Access the 'DB' binding we defined in wrangler.jsonc
  const { env } = getCloudflareContext();
  return drizzle(env.DB);
};