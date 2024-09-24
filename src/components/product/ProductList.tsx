import { getProductListData } from '@/actions/product/getProductData'
import ProductCard from './ProductCard'

export default async function ProductList({ viewMode = 0 }: { viewMode?: number }) {
  // 상품 리스트 데이터

  const productList: ProductCardType[] = await getProductListData()

  return (
    <>
      <ul
        className={`grid 
          ${
            viewMode == 0
              ? 'grid-cols-2 gap-x-[8px]'
              : viewMode == 1
                ? 'grid-cols-4 gap-[4px] mb-[36px]'
                : viewMode == 2
                  ? 'grid-cols-1'
                  : 'grid-cols-2 gap-x-[8px]'
          } w-full  px-[24px]`}
      >
        {productList.map((item) => (
          <ProductCard key={item.id} productCard={item} viewMode={viewMode} />
        ))}
      </ul>
    </>
  )
}
