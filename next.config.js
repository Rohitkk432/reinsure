/** @type {import('next').NextConfig} */

const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa")({
    dest: "public",
    disable: process.env.NODE_ENV === "development",
    runtimeCaching,
});

const nextConfig = withPWA({
  reactStrictMode: true,
  env: {
    NEXT_PUBLIC_INFURA_IPFS_API_KEY:
      process.env.NEXT_PUBLIC_INFURA_IPFS_API_KEY,
    NEXT_PUBLIC_INFURA_IPFS_API_SECRET:
      process.env.NEXT_PUBLIC_INFURA_IPFS_API_SECRET,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
  eslint: {
    // ignoreDuringBuilds: true,
  },
});
module.exports = nextConfig;
