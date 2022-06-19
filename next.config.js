/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true,
  },
};

module.exports = nextConfig;
