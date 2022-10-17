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
      {
        source: '/',
        destination: '/normal_values',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
