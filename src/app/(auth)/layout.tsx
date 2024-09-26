import AuthServiceHeader from '@/components/layout/AuthServiceHeader'
import BottomNavigation from '@/components/layout/BottomNavigation'
import Footer from '@/components/layout/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'SIVILLAGE(에스아이빌리지) 공식몰',
    template: '%s - S.I.VILLAGE',
  },
  description:
    '신세계인터내셔날 공식몰. 국내외 럭셔리 브랜드부터 트렌디한 패션 아이템까지. 지금, 시마을에서 최고의 쇼핑을 경험해 보세요!',
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <AuthServiceHeader />
      {children}
      <Footer />
      <BottomNavigation />
    </>
  )
}
