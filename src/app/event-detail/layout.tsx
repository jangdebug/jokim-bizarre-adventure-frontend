import BottomNavigation from '@/components/layout/BottomNavigation'
import MainHeader from '@/components/layout/MainHeader'
import MainStickyHeader from '@/components/layout/MainStickyHeader'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <MainHeader />
      <MainStickyHeader />
      {children}
      <BottomNavigation />
    </>
  )
}
