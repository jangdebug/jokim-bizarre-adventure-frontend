import ProductDescriptionSection from '@/components/product-detail/ProductDescriptionSection'
import ProductDetailNavigation from '@/components/product-detail/ProductDetailNavigation'
import ProductHashTagSection from '@/components/product-detail/ProductHashTagSection'
import ReviewListSection from '@/components/review/ReviewListSection'
import ReviewSummarySection from '@/components/review/ReviewSummarySection'
import { Button } from '@/components/ui/button'
import Divider from '@/components/ui/Divider'
import SlimEventSwiper from '@/components/ui/SlimEventSwiper'
import { productDetailData } from '@/datas/dummy/product/ProductDetailData'

async function getDescription(productId: string) {
  try {
    const res = await fetch(`https://m-goods.sivillage.com/goods/getGoodDescCont.siv?goods_no=${productId}`)
    return await res.text()
  } catch (error) {
    return `<div>ERROR</div>`
  }
}

interface ProductDetailProps {
  params: {
    id: string
  }
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  // params 로 받아온 상품 id 를 통해 데이터를 받아와야함
  const productDetail: ProductDetailType = productDetailData
  const html = await getDescription(productDetail.productId)
  // console.log(params.id)

  return (
    <main>
      <ProductHashTagSection hashTagList={productDetail.hashTag} />
      <SlimEventSwiper />
      {/* ProductDetailNavigation */}
      <ProductDetailNavigation reviewCount={productDetail.reviewCount} />
      <ProductDescriptionSection html={html} />
      <div className="flex p-[24px] gap-[8px]">
        <Button variant={'outline'} size={'auth'}>
          배송/반품/교환 안내
        </Button>
        <Button variant={'outline'} size={'auth'}>
          상품정보제공고시
        </Button>
      </div>
      <Divider />
    </main>
  )
}
