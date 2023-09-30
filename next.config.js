/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['lirp.cdn-website.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.scdn.co',
      },
      {
        protocol: 'https',
        hostname: 'openweathermap.org',
      },
    ],
  },
}

module.exports = nextConfig
