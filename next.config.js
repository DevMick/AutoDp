/** @type {import('next').NextConfig} */
const nextConfig = {
  // App Router est maintenant stable dans Next.js 14
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
