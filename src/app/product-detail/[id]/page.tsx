import { getProductOption, getProductReviewCount, getProductSummaryData } from '@/actions/product/getProductData'
import ProductDescriptionSection from '@/components/product-detail/ProductDescriptionSection'
import ProductDetailBottomNavigation from '@/components/product-detail/ProductDetailBottomNavigation'
import ProductDetailNavigation from '@/components/product-detail/ProductDetailNavigation'
import ProductHashTagSection from '@/components/product-detail/ProductHashTagSection'
import { Button } from '@/components/ui/button'
import Divider from '@/components/ui/Divider'
import SlimEventSwiper from '@/components/ui/SlimEventSwiper'
import { productDetailData } from '@/datas/dummy/product/ProductDetailData'

async function getDescription(productDetailUrl: string) {
  try {
    const res = await fetch(productDetailUrl)
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
  const productCode = params.id

  const productSummary: ProductSummaryDataType = await getProductSummaryData(productCode)

  const reviewCount = await getProductReviewCount(productCode)
  const html = await getDescription(productSummary.detail)
  const productOption: ProductOptionDataType[] = await getProductOption(productCode)

  const discountedPrice = productSummary.price - productSummary.price * (productSummary.discountRate / 100)

  // dummy
  const productDetail: ProductDetailType = productDetailData

  // 쇼핑백으로 보내는 서버액션

  // 바로구매 진행하는 서버액션

  return (
    <main>
      <ProductHashTagSection hashTagList={productDetail.hashTag} />
      <SlimEventSwiper />
      <ProductDetailNavigation reviewCount={reviewCount} />
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
      <ProductDetailBottomNavigation
        productCode={productSummary.productCode}
        productOptions={productOption}
        price={discountedPrice}
      />
    </main>
  )
}
