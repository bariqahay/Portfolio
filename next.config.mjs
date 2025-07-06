/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: true,
  },
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
