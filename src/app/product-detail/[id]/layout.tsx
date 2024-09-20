import Footer from '@/components/layout/Footer'
import ProductDetailHeader from '@/components/layout/ProductDetailHeader'
import ProductDetailBottomNavigation from '@/components/product-detail/ProductDetailBottomNavigation'
import ToTopButton from '@/components/util/ToTopButton'

export default function Layout({
  children,
  summary,
  review,
}: Readonly<{
  children: React.ReactNode
  summary: React.ReactNode
  review: React.ReactNode
}>) {
  return (
    <>
      <ProductDetailHeader />
      {summary}
      {children}
      {review}

      <ToTopButton moveWithBottomNav={false} />
      <Footer />
      <ProductDetailBottomNavigation />
    </>
  )
}
