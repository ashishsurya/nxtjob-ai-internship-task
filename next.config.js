/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        hostname: 's3-alpha-sig.figma.com',
        protocol: 'https',
        pathname:
          '/img/**',
      },
    ],
  },
};

module.exports = nextConfig;
