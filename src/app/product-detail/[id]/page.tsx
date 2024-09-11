import ProductDescriptionSection from '@/components/icons/product-detail/ProductDescriptionSection'
import ProductDetailSwiper from '@/components/product-detail/ProductDetailSwiper'
import ProductSummarySection from '@/components/product-detail/ProductSummarySection'
import Divider from '@/components/ui/Divider'
import { productDetailData } from '@/datas/dummy/product/ProductDetailData'

async function getDescription(productId: number) {
  try {
    const res = await fetch(`https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=${productId}`)
    return await res.text()
  } catch (error) {
    return `<div>ERROR</div>`
  }
}

export default async function ProductDetail({ slug }: { slug: string }) {
  console.log(slug)

  const productDetail: ProductDetailType = productDetailData
  const descriptionData: string = await getDescription(productDetail.productId)
  return (
    <main>
      {/* ProductSummarySection */}
      <ProductDetailSwiper productDetailImages={productDetail.images} />
      <ProductSummarySection productDetailData={productDetail} />
      <Divider />
      {/* ProductDescriptionSection */}
      <ProductDescriptionSection data={descriptionData} />
      {/* FewReviewsSection */}
    </main>
  )
}
