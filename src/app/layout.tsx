import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Noto_Sans_KR } from '@next/font/google'

import './globals.css'
import BottomNavigation from '@/components/layout/BottomNavigation'
import Footer from '@/components/layout/Footer'
import ToTopButton from '@/components/util/ToTopButton'

const inter = Inter({ subsets: ['latin'] })
const notoSansKR = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'SIVILLAGE(에스아이빌리지) 공식몰',
    template: '%s | SPHAROS 5TH CLONE APP',
  },
  description:
    '신세계인터내셔날 공식몰. 국내외 럭셔리 브랜드부터 트렌디한 패션 아이템까지. 지금, 시마을에서 최고의 쇼핑을 경험해 보세요!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body className={notoSansKR.className}>{children}</body>
    </html>
  )
}
