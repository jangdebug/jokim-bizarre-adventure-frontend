import BottomNavigation from '@/components/layout/BottomNavigation'
import Footer from '@/components/layout/Footer'
import HeaderBasketCount from '@/components/layout/HeaderBasketCount'
import MainHeader from '@/components/layout/MainHeader'
import MainStickyHeader from '@/components/layout/MainStickyHeader'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <MainHeader />
      <HeaderBasketCount />
      <MainStickyHeader />
      {children}
      <Footer />
      <BottomNavigation />
    </>
  )
}
