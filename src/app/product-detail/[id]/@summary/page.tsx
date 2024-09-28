import { getProductImageData, getProductSummaryData } from '@/actions/product/getProductData'
import BenefitInfoSection from '@/components/product-detail/BenefitInfoSection'
import ProductDetailSwiper from '@/components/product-detail/ProductDetailSwiper'
import ProductSummarySection from '@/components/product-detail/ProductSummarySection'
import Divider from '@/components/ui/Divider'
import { productDetailData } from '@/datas/dummy/product/ProductDetailData'

export default async function Summary({
  params,
}: {
  params: {
    id: string
  }
}) {
  // todo 상품 상세에 대한 대이터를 별도로 가져와야합니다
  const productDetail: ProductDetailType = await productDetailData
  const productImages: ProductMediaType[] = await getProductImageData(params.id)

  return (
    <>
      <ProductDetailSwiper productDetailImages={productImages} />
      <ProductSummarySection productCode={params.id} />
      <Divider />
      <BenefitInfoSection productCode={params.id} />
    </>
  )
}
