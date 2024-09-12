import ProductDescriptionSection from '@/components/icons/product-detail/ProductDescriptionSection'
import ProductHashTagSection from '@/components/product-detail/ProductHashTagSection'
import { Button } from '@/components/ui/button'
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

export default async function ProductDetail() {
  const productDetail: ProductDetailType = productDetailData
  const test = await getDescription(productDetail.productId)
  return (
    <main>
      <ProductHashTagSection hashTagList={productDetail.hashTag} />
      <SlimEventSwiper />

      {/* ProductDetailNavigation */}

      <ProductDescriptionSection html={test} id={productDetail.productId} />

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
