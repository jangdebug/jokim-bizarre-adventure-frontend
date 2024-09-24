'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import CloseIcon from '../icons/product-list-header/CloseIcon'
import DownArrowSmallIcon from '../icons/product-list-header/DownArrowSmallIcon'
import { useState } from 'react'
import { useScrollEvent } from '@/hooks/UseScrollEvent'

export default function ProductStickyHeader({
  parentCategoryName,
  subCategories,
}: {
  parentCategoryName?: string
  subCategories?: CategoryType[]
}) {
  const [isWrap, setIsWrap] = useState<boolean>(false)
  const isVisible = useScrollEvent()

  const handleWrapState = () => {
    setIsWrap((prev) => !prev)
  }

  return (
    <nav className={`z-50 bg-white w-full sticky ${isVisible ? 'top-[48px]' : 'top-0'}`}>
      <div className={` pl-6 bg-white box-border z-15 border-b border-[#e0e0e0]`}>
        {isWrap && (
          <div className="flex items-center justify-between">
            <p className="text-[14px] leading-[48px] text-[#787878]">ALL CATEGORIES</p>
          </div>
        )}
        <div className="flex">
          {isWrap ? null : (
            <p className="text-black font-medium pr-6 h-[48px] text-[16px] leading-[48px] tracking-[0.4px] whitespace-nowrap">
              전체
            </p>
          )}
          <ul className={`flex w-full  ${isWrap ? 'flex-wrap ' : 'overflow-x-auto no-scrollbar '}`}>
            {isWrap ? (
              <p className="text-black font-medium pr-6 h-[48px] text-[16px] leading-[48px] tracking-[0.4px] whitespace-nowrap">
                전체
              </p>
            ) : null}
            {subCategories?.map((item) => (
              <li key={item.categoryCode}>
                {/* 카테고리 데이터에 따른 별도의 링크로 이동해야 합니다. */}
                <Link
                  href={{
                    pathname: `/product/${parentCategoryName}/${item.categoryName}`,
                    query: {
                      code: item.categoryCode,
                      parentName: parentCategoryName,
                      childName: item.categoryName,
                    },
                  }}
                  className={`text-[#929292] pr-6 h-[48px] text-[16px] leading-[48px] tracking-[0.4px] whitespace-nowrap
                    `}
                >
                  {item.categoryName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Button
        variant="ghost"
        className="absolute right-0 top-0 h-[48px] bg-linear hover:bg-inherit"
        onClick={handleWrapState}
      >
        {isWrap ? <CloseIcon /> : <DownArrowSmallIcon />}
      </Button>
    </nav>
  )
}
