/** @type {import('next').NextConfig} */
const nextConfig = {
  // Disable image optimization for Cloudflare Pages
  images: {
    unoptimized: true
  },
  // Ensure proper output for Cloudflare
  output: 'export',
  trailingSlash: true,
  // Disable server-side features that don't work on Cloudflare Pages
  experimental: {
    esmExternals: false
  }
}

module.exports = nextConfig