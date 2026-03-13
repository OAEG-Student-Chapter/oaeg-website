/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  // Ensure proper Edge Function handling
  async rewrites() {
    return []
  }
};

module.exports = nextConfig;