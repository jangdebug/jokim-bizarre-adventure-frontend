import ProductCard from './ProductCard'
import { productListData } from '@/datas/dummy/product/ProductListData'

export default function ProductList({ viewMode = 0 }: { viewMode?: number }) {
  // 상품 리스트 데이터
  const test: number[] = [2, 4, 1]
  const productList: ProductCardType[] = productListData

  return (
    <>
      <ul className={`grid grid-cols-${test[viewMode]} w-full gap-x-2 px-[24px]`}>
        {productList.map((item) => (
          <ProductCard key={item.id} productCard={item} />
        ))}
      </ul>
    </>
  )
}
