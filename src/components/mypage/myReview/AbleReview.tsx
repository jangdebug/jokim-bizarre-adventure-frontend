'use client'

import React, { useState } from 'react'
import DateRange from './DateRange'

export default function AbleReview() {
  const [range, setRange] = useState<string>('1')
  const [products, setProducts] = useState([]) // 상품 데이터를 저장할 상태
  const [loading, setLoading] = useState(false) // 로딩 상태

  const handleRange = (value: string) => {
    setRange(value)
  }

  let count = 0

  return (
    <>
      <DateRange defaultRange={range} handleRange={handleRange} />

      {count > 0 ? (
        <div className="h-[240px] flex items-center mt-2 mb-[80px]">
          <p>range : {range}</p>
        </div>
      ) : (
        <div className="h-[240px] flex items-center justify-center mt-2 mb-[80px]">
          <p className="text-sm text-gray-500">작성 가능한 상품리뷰가 없습니다.</p>
        </div>
      )}
    </>
  )
}
