/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true
  },
  
  // Convert dynamic routes to static generation
  experimental: {
    esmExternals: false
  },
  
  // Ensure proper Edge Function handling
  async rewrites() {
    return []
  }
};

module.exports = nextConfig;