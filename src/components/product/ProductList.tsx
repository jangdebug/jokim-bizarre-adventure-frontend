'use client'
import React, { useState, useEffect, useRef } from 'react'
import ProductCard from './ProductCard'
import { getProductCodeList } from '@/actions/product/getProductData'
import ProductListSectionHeader from './ProductListSectionHeader'

export default function ProductList({
  intialProductCodes,
  categoryCode,
}: {
  intialProductCodes: ProductCodeType[]
  categoryCode: string
}) {
  const [productCodeList, setProductCodeList] = useState<ProductCodeType[]>(intialProductCodes)
  const [pageNo, setPageNo] = useState(1)
  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const observerRef = useRef<HTMLDivElement | null>(null)
  const [viewMode, setViewMode] = useState<number>(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
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
  }, [loading, hasMore])

  const fetchMoreProducts = () => {
    if (loading || !hasMore) return

    setLoading(true)
    getProductCodeList(categoryCode, pageNo + 1)
      .then((newProducts) => {
        if (newProducts.length === 0) {
          setHasMore(false)
        } else {
          setProductCodeList((prevList) => [...prevList, ...newProducts])
          setPageNo((prevPageNo) => prevPageNo + 1)
        }
      })
      .catch((error) => {
        console.error('상품을 불러오는 중 오류 발생:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const handleViewModeChange = () => {
    setViewMode((prev) => (prev + 1 > 2 ? 0 : prev + 1))
  }

  return (
    <>
      <ProductListSectionHeader currentViewMode={viewMode} handleViewMode={handleViewModeChange} />
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

      {/* 더 이상 불러올 데이터가 없으면 표시 */}
      {!hasMore && <div className="text-center p-4">상품이 존재하지 않습니다.</div>}

      {/* 스크롤 감지용 */}
      <div ref={observerRef} className="w-full h-[1px]"></div>
    </>
  )
}
