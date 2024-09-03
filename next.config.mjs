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
    ],
  },
}

export default nextConfig
