import AuthServiceHeader from '@/components/layout/AuthServiceHeader'
import BottomNavigation from '@/components/layout/BottomNavigation'
import Footer from '@/components/layout/Footer'
import MyInfoLookUp from '@/components/mypage/myInfoLookUp'

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
