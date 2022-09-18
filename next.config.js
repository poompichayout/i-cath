/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/calculator',
        destination: '/calculator/co',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
