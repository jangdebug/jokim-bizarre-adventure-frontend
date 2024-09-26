import BottomNavigation from '@/components/layout/BottomNavigation'
import Footer from '@/components/layout/Footer'
import ProductCategoryInfoHeader from '@/components/layout/ProductCategoryInfoHeader'
import ProductPageHeader from '@/components/layout/ProductPageHeader'

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <ProductPageHeader />
      <ProductCategoryInfoHeader />
      {children}
      <Footer />
      <BottomNavigation withFadeOption={true} />
    </>
  )
}
