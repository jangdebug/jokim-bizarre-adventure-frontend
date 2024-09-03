import BottomNavigation from '@/components/layout/BottomNavigation'
import Footer from '@/components/layout/Footer'
import MainHeader from '@/components/layout/MainHeader'
import MainStickyHeader from '@/components/layout/MainStickyHeader'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {/* category 용 헤더 필요 */}
      {children}
      <BottomNavigation />
    </>
  )
}
