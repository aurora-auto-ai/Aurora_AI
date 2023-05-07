/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  transpilePackages: ["@aurora_ai/ui"],
  experimental: {
    serverActions: true,
  },
};
