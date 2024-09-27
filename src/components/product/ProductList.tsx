'use client'
import React, { useState, useEffect, useRef, Suspense } from 'react'
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
  // 상품 리스트 데이터 호출
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          fetchMoreProducts()
        }
      },
      { threshold: 1 },
    )

    if (observerRef.current) {
      observer.observe(observerRef.current)
    }

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current)
    }
  }, [loading])

  const fetchMoreProducts = async () => {
    setLoading(true)
    try {
      const newProducts = await getProductCodeList(categoryCode, pageNo + 1)
      setProductCodeList((prevList) => [...prevList, ...newProducts])
      setPageNo((prevPageNo) => prevPageNo + 1)
    } catch (error) {
      console.error('상품을 불러오는 중 오류 발생:', error)
    } finally {
      setLoading(false)
    }
  }

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
        {productCodeList.map((item) => (
          <ProductCard key={item.productCode} productCode={item} viewMode={viewMode} />
        ))}
      </ul>
      {/* 로딩 */}
      {loading && <div className="text-center p-4">LOADING...</div>}

      {/* 스크룰 감지용*/}
      <div ref={observerRef} className="w-full h-[1px]"></div>
    </>
  )
}
