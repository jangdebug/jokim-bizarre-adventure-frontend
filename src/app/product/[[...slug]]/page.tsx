import FilterBar from '@/components/product/FilterBar'
import ProductList from '@/components/product/ProductList'
import ProductListSectionHeader from '@/components/product/ProductListSectionHeader'

interface ViewModeType {
  type: number
}

export default function Product({ searchParams }: { searchParams: ViewModeType }) {
  // console.log(searchParams)

  // export default function Product({ params }: { params: { slug: string[] } }) {
  // console.log('path', params.slug)

  // const slug = params.slug
  // const slugArray = Array.isArray(slug) ? slug : [slug]

  // const decodedSlugArray = slugArray.map((element) => decodeURIComponent(element))

  // const [mainCategory, middleCategory, sub1, sub2] = decodedSlugArray
  // console.log(mainCategory, middleCategory, sub1, sub2)

  return (
    <section>
      <ProductListSectionHeader currentViewMode={searchParams.type} />
      <FilterBar />
      <ProductList viewMode={searchParams.type} />
    </section>
  )
}
