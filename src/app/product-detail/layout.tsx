import Footer from '@/components/layout/Footer'
import ProductDetailHeader from '@/components/layout/ProductDetailHeader'
import ToTopButton from '@/components/util/ToTopButton'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ProductDetailHeader />
      {children}
      <ToTopButton moveWithBottomNav={false} />
      <Footer />
      {/* <ProductDetailBottomNavigation /> */}
      {/* <ProductDetailBottomNavigation_tet /> */}
    </>
  )
}
