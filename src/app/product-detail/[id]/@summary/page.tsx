import BenefitInfoSection from '@/components/product-detail/BenefitInfoSection'
import ProductDetailSwiper from '@/components/product-detail/ProductDetailSwiper'
import ProductSummarySection from '@/components/product-detail/ProductSummarySection'
import Divider from '@/components/ui/Divider'
import SlimEventSwiper from '@/components/ui/SlimEventSwiper'
import { productDetailData } from '@/datas/dummy/product/ProductDetailData'

export default async function Summary() {
  const productDetail: ProductDetailType = await productDetailData

  return (
    <>
      <ProductDetailSwiper productDetailImages={productDetail.images} />
      <ProductSummarySection productDetailData={productDetail} />
      <Divider />
      <BenefitInfoSection productId={productDetail.productId} productPrice={productDetail.price} />
      <SlimEventSwiper />
    </>
  )
}
