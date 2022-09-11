/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/calculator',
        destination: '/calculator/fick',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
