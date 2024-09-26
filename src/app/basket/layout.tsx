import BasketHeader from '@/components/layout/BasketHeader'
import Footer from '@/components/layout/Footer'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <BasketHeader />
      {children}
      <Footer />
    </>
  )
}
