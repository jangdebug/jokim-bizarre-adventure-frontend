import FilterBar from '@/components/product/FilterBar'
import ProductContentsHeader from '@/components/product/ProductContentsHeader'

export default function Product({ params }: { params: { slug: string[] } }) {
  const slug = params.slug
  const slugArray = Array.isArray(slug) ? slug : [slug]

  const decodedSlugArray = slugArray.map((element) => decodeURIComponent(element))

  const [mainCategory, middleCategory, sub1, sub2] = decodedSlugArray
  console.log(mainCategory, middleCategory, sub1, sub2)

  return (
    // <div className="h-[300vh]">
    //   <h1>Product Page</h1>
    //   <p>Main Category: {mainCategory || 'undf'}</p>
    //   <p>Middle Category: {middleCategory || 'undf'}</p>
    //   <p>Subcategory 1: {sub1 || 'undf'}</p>
    //   <p>Subcategory 2: {sub2 || 'undf'}</p>
    // </div>
    <section>
      <ProductContentsHeader />
      <FilterBar />
      <div className="productList h-[500vh]">productList</div>
    </section>
  )
}
