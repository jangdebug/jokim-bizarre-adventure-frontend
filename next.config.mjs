/** @type {import('next').NextConfig} */
import withPWAInit from '@ducanh2912/next-pwa';

const withPWA = withPWAInit({
  dest: 'public',
  disable: false,
  reloadOnOnline: true,
  swcMinify: true,
  workboxOptions: {
    disableDevLogs: true,
  },
});
const nextConfig = withPWA({
  // output: 'standalone',
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
  env: {
    API_BASE_URL: process.env.API_BASE_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    KAKAO_CLIENT_ID: process.env.KAKAO_CLIENT_ID,
    KAKAO_CLIENT_SECRET: process.env.KAKAO_CLIENT_SECRET,
    NAVER_CLIENT_ID:process.env.NAVER_CLIENT_ID,
    NAVER_CLIENT_SECRET:process.env.NAVER_CLIENT_SECRET
  },
});

export default nextConfig;
