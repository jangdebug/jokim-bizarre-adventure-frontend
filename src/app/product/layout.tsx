'use client'
import BottomNavigation from '@/components/layout/BottomNavigation'
import Footer from '@/components/layout/Footer'
import ProductCategoryInfoHeader from '@/components/layout/ProductCategoryInfoHeader'
import ProductPageHeader from '@/components/layout/ProductPageHeader'
import ProductStickyHeader from '@/components/layout/ProductStickyHeader'
import { usePathname } from 'next/navigation'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const pathName = usePathname()

  if (!pathName) return <div>Loading...</div>
  const pathSegments = pathName.split('/').filter(Boolean)
  const filteredPathSegments = pathSegments.slice(1).slice(-2)
  const decodedSegments = filteredPathSegments.map((segment) => decodeURIComponent(segment))

  console.log('layout decoded', decodedSegments)

  return (
    <>
      <ProductPageHeader />
      <ProductCategoryInfoHeader categoryInfo={decodedSegments} />
      <ProductStickyHeader />
      {children}
      <Footer />
      <BottomNavigation withFadeOption={true} />
    </>
  )
}
