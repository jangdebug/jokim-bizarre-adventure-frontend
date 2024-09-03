import BottomNavigation from '@/components/layout/BottomNavigation'
import Footer from '@/components/layout/Footer'
import ProductCategoryInfoHeader from '@/components/layout/ProductCategoryInfoHeader'
import ProductPageHeader from '@/components/layout/ProductPageHeader'
import ProductStickyHeader from '@/components/layout/ProductStickyHeader'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ProductPageHeader />
      <ProductCategoryInfoHeader />
      <ProductStickyHeader />
      {children}
      <Footer />
      <BottomNavigation withFadeOption={true} />
    </>
  )
}
