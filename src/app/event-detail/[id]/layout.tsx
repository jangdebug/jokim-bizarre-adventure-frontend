import BottomNavigation from '@/components/layout/BottomNavigation'
import Footer from '@/components/layout/Footer'
import MainHeader from '@/components/layout/MainHeader'

export default function RootLayout({
  children,
  relation,
  category,
}: Readonly<{
  children: React.ReactNode
  relation: React.ReactNode
  category: React.ReactNode
}>) {
  return (
    <>
      <MainHeader />
      <main>
        {children}
        {relation}
        {category}
      </main>
      <Footer />
      <BottomNavigation />
    </>
  )
}
