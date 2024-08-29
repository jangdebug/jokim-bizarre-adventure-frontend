/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.sivillage.com',
      },
    ],
  },
}

export default nextConfig
