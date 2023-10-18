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
      {
        protocol: 'https',
        hostname: 'media-4.api-sports.io',
      },
      {
        protocol: 'https',
        hostname: 'firebasestorage.googleapis.com',
      },
    ],
  },
}

const withNextIntl = require('next-intl/plugin')(
  // This is the default (also the `src` folder is supported out of the box)
  './src/i18n.ts',
)

module.exports = withNextIntl(nextConfig)
