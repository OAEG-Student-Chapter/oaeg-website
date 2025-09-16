/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable image optimization for Cloudflare Pages compatibility
  images: {
    unoptimized: true
  },
  
  // Use static export for better Cloudflare Pages compatibility
  output: 'export',
  
  // Add trailing slashes for consistent routing
  trailingSlash: true,
  
  // Disable some experimental features that may cause issues
  experimental: {
    esmExternals: false
  },

  // Ensure proper asset prefix if needed
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Configure webpack for better compatibility
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  }
};

module.exports = nextConfig;