import ProductDescriptionSection from '@/components/icons/product-detail/ProductDescriptionSection'
import ProductDetailSwiper from '@/components/product-detail/ProductDetailSwiper'
import ProductSummarySection from '@/components/product-detail/ProductSummarySection'
import { Button } from '@/components/ui/button'
import Divider from '@/components/ui/Divider'
import SlimEventSwiper from '@/components/ui/SlimEventSwiper'
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
      <ProductDetailSwiper productDetailImages={productDetail.images} />
      <ProductSummarySection productDetailData={productDetail} />
      <Divider />

      <SlimEventSwiper />

      {/* ProductDescriptionSection */}
      <ProductDescriptionSection data={descriptionData} />
      <div className="flex p-[24px] gap-[8px]">
        <Button variant={'outline'} size={'auth'}>
          배송/반품/교환 안내
        </Button>
        <Button variant={'outline'} size={'auth'}>
          상품정보제공고시
        </Button>
      </div>

      {/* FewReviewsSection */}
    </main>
  )
}
