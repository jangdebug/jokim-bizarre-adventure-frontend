import BottomNavigation from '@/components/layout/BottomNavigation'
import CategoryPageHeader from '@/components/layout/CategoryPageHeader'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {/* category 용 헤더 필요 */}
      <CategoryPageHeader />
      {children}
      <BottomNavigation />
    </>
  )
}
