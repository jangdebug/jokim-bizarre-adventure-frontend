import React, { Suspense } from 'react'
import ProductCard from './ProductCard'

export default function ProductList({
  viewMode = 0,
  productList,
}: {
  viewMode?: number
  productList: ProductCardType[]
}) {
  // 상품 리스트 데이터 호출

  // 무한페이지 하단 도착 시 새 데이터 호출
  const LazyProductCard = React.lazy(() => import('./ProductCard'))

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
          <Suspense
            key={item.id}
            fallback={
              <div className="w-full h-[380px] p-[4px]">
                <div className="w-full h-full bg-[#f2f2f2]"></div>
              </div>
            }
          >
            <ProductCard productCard={item} viewMode={viewMode} />
          </Suspense>
        ))}
      </ul>
    </>
  )
}
