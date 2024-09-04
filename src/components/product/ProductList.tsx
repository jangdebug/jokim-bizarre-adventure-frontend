import ProductCard from './ProductCard'
import { productListData } from '@/datas/dummy/product/ProductListData'

export default function ProductList({ viewMode = 0 }: { viewMode?: number }) {
  // 상품 리스트 데이터

  const test: number[] = [2, 4, 1]
  console.log('plist', viewMode, test[viewMode])
  const productList: ProductCardType[] = productListData

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
