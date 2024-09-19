/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.sivillage.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn-mo.sivillage.com',
      },
      {
        protocol: 'https',
        hostname: 'm-goods.sivillage.com',
      },
    ],
  },
}

export default nextConfig
