import { getChildCategory } from '@/actions/category/getCategoryData'
import { getProductListData } from '@/actions/product/getProductData'
import ProductStickyHeader from '@/components/layout/ProductStickyHeader'
import FilterBar from '@/components/product/FilterBar'
import ProductList from '@/components/product/ProductList'
import ProductListSectionHeader from '@/components/product/ProductListSectionHeader'

interface ProductSearchParamType {
  code: string
  type: number
}

export default async function Product({
  params,
  searchParams,
}: {
  params: { slug: string[] }
  searchParams: ProductSearchParamType
}) {
  // check path
  const slug = params.slug
  const slugArray = Array.isArray(slug) ? slug : [slug]
  const decodedSlugArray = slugArray.map((element) => decodeURIComponent(element))
  const parentCategoryName = decodedSlugArray[decodedSlugArray.length - 1]

  const productList: ProductCardType[] = await getProductListData(searchParams.code)
  const subCatgories: CategoryType[] = await getChildCategory(searchParams.code)
  console.log('searchparam is', searchParams)
  console.log('subcat res is ', subCatgories)

  return (
    <main>
      <ProductStickyHeader parentCategoryName={parentCategoryName} subCategories={subCatgories} />
      <FilterBar />
      <ProductListSectionHeader currentViewMode={searchParams.type} />
      <ProductList viewMode={searchParams.type} productList={productList} />
    </main>
  )
}
