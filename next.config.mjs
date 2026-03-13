import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Ensure proper Edge Function handling
  async rewrites() {
    return [];
  },
};

export default withPayload(nextConfig);
