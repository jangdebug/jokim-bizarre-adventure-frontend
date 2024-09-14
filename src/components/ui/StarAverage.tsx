'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function StarAverage({
  starAverage = 0,
  reviewCount,
  showReviewCount = true,
  color = '#000000',
  size = 16,
}: {
  starAverage: number
  reviewCount: number
  showReviewCount?: boolean
  color?: string
  size?: number
}) {
  const [average, setAverage] = useState<number>(0)

  useEffect(() => {
    setAverage(starAverage * 20) // Calculate percentage width based on starAverage
  }, [starAverage])

  return (
    <>
      <div className="mt-[32px] flex gap-[4px]">
        <div className="relative w-fit bg-[#c8c8c8]" style={{ height: `${size}px` }}>
          <Image
            src={'https://cdn-mo.sivillage.com/mo/assets/comm/image/detail_starpoint.png'}
            alt="starpoint"
            width={0}
            height={0}
            sizes="100vh"
            className="z-[1] relative"
            style={{ height: '100%', width: 'auto' }}
          />
          <div
            className="absolute top-[50%] left-0 indent-[-9999px] "
            style={{
              width: `${average}%`,
              backgroundColor: color,
              height: `${size - 2}px`,
              transform: `translateY(${((size - 2) / 2) * -1}px)`,
            }}
          >
            {3.5}
          </div>
        </div>
        {showReviewCount ? <span className="text-[12px] leading-[14px] text-[#a0a0a0]">({reviewCount})</span> : null}
      </div>
    </>
  )
}
