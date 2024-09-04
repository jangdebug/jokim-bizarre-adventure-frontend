'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import CloseIcon from '../icons/product-list-header/CloseIcon'
import DownArrowSmallIcon from '../icons/product-list-header/DownArrowSmallIcon'
import { useState } from 'react'
import { useScrollEvent } from '@/hooks/UseScrollEvent'

interface ItemCategory {
  id: number
  title: string
  value: string
  url: string
}

const itemCategoryDatas: ItemCategory[] = [
  { id: 2, title: '자켓', value: 'event', url: '/' },
  { id: 3, title: '점퍼', value: 'deal', url: '/' },
  { id: 4, title: '베스트', value: 'best', url: '/' },
  { id: 5, title: '코트', value: 'silive', url: '/' },
  { id: 6, title: '다운/패딩', value: 'content', url: '/' },
  { id: 7, title: '퍼/무스탕', value: 'ssgdf', url: '/' },
]

export default function ProductStickyHeader() {
  const [isWrap, setIsWrap] = useState<boolean>(false)
  const isVisible = useScrollEvent()

  const itemCategories = itemCategoryDatas

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
            <Link
              href="/product"
              className="text-black font-medium pr-6 h-[48px] text-[16px] leading-[48px] tracking-[0.4px] whitespace-nowrap"
            >
              전체
            </Link>
          )}
          <ul className={`flex w-full  ${isWrap ? 'flex-wrap ' : 'overflow-x-auto no-scrollbar '}`}>
            {isWrap ? (
              <Link
                href="/product"
                className="text-black font-medium pr-6 h-[48px] text-[16px] leading-[48px] tracking-[0.4px] whitespace-nowrap"
              >
                전체
              </Link>
            ) : null}
            {itemCategories.map((item) => (
              <li key={item.id}>
                {/* 카테고리 데이터에 따른 별도의 링크로 이동해야 합니다. */}
                <Link
                  href={item.url}
                  className={`text-[#929292] pr-6 h-[48px] text-[16px] leading-[48px] tracking-[0.4px] whitespace-nowrap
                    `}
                >
                  {item.title}
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
