/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/qr-generator',
  eslint: {
    dirs: ['.']
  },
  reactStrictMode: true,
  swcMinify: true
};

module.exports = nextConfig;
