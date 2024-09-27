'use client'
import React, { useState, useEffect, useRef } from 'react'
import ProductCard from './ProductCard'
import { getProductCodeList } from '@/actions/product/getProductData'

export default function ProductList({
  viewMode = 0,
  productList: initialProductList,
  intialProductCodes,
  categoryCode,
}: {
  viewMode?: number
  productList: ProductCardType[]
  intialProductCodes: ProductCodeType[]
  categoryCode: string
}) {
  const [productCodeList, setProductCodeList] = useState<ProductCodeType[]>(intialProductCodes)
  const [pageNo, setPageNo] = useState(1)
  const [loading, setLoading] = useState(false)
  const observerRef = useRef<HTMLDivElement | null>(null)

  // IntersectionObserver 설정
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchMoreProducts()
        }
      },
      { threshold: 1 },
    )

    const currentObserver = observerRef.current
    if (currentObserver) {
      observer.observe(currentObserver)
    }

    return () => {
      if (currentObserver) observer.unobserve(currentObserver)
    }
  }, [loading])

  // 상품 데이터 가져오기
  const fetchMoreProducts = async () => {
    setLoading(true)
    try {
      const newProducts = await getProductCodeList(categoryCode, pageNo + 1)
      setProductCodeList((prevList) => [...prevList, ...newProducts])
      setPageNo((prevPageNo) => prevPageNo + 1)
    } catch (error) {
      console.error('상품을 불러오는 중 오류 발생:', error)
      // 사용자에게 오류 메시지 표시할 수 있음
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <ul
        className={`grid 
          ${
            viewMode === 0
              ? 'grid-cols-2 gap-x-[8px]'
              : viewMode === 1
                ? 'grid-cols-4 gap-[4px] mb-[36px]'
                : viewMode === 2
                  ? 'grid-cols-1'
                  : 'grid-cols-2 gap-x-[8px]'
          } 
          w-full px-[24px]`}
      >
        {productCodeList.map((item) => (
          <ProductCard key={item.productCode} productCode={item} viewMode={viewMode} />
        ))}
      </ul>

      {/* 로딩 표시 */}
      {loading && <div className="text-center p-4">LOADING...</div>}

      {/* 스크롤 감지용 */}
      <div ref={observerRef} className="w-full h-[1px]"></div>
    </>
  )
}
