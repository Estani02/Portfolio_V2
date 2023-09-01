/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['lirp.cdn-website.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
    ],
  },
}

module.exports = nextConfig
