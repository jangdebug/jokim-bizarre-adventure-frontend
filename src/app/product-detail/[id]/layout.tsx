import Footer from '@/components/layout/Footer'
import ProductDetailHeader from '@/components/layout/ProductDetailHeader'
import ProductDetailBottomNavigation from '@/components/product-detail/ProductDetailBottomNavigation'
import ToTopButton from '@/components/util/ToTopButton'

export default function Layout({
  children,
  summary,
}: Readonly<{
  children: React.ReactNode
  summary: React.ReactNode
}>) {
  return (
    <>
      <ProductDetailHeader />
      {summary}
      {children}

      <ToTopButton moveWithBottomNav={false} />
      <Footer />
      <ProductDetailBottomNavigation />
    </>
  )
}
