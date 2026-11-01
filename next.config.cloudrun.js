/** @type {import('next').NextConfig} */
// Configuration for Cloud Run deployment (standalone mode)
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
