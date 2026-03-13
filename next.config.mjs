import { withPayload } from "@payloadcms/next/withPayload";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Essential for OpenNext
  outputFileTracingIncludes: {
    // Avoid tracing unnecessary files
  },
  // Ensure proper Edge Function handling
  async rewrites() {
    return [];
  },
};

export default withPayload(nextConfig);
