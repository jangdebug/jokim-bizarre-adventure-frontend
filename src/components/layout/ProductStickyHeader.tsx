'use client'

import Link from 'next/link'
import { Button } from '../ui/button'
import CloseIcon from '../icons/product-list-header/CloseIcon'
import DownArrowSmallIcon from '../icons/product-list-header/DownArrowSmallIcon'
import { useEffect, useState } from 'react'

interface ItemCategory {
  id: number
  title: string
  value: string
  url: string
}

const itemCategoryDatas: ItemCategory[] = [
  { id: 2, title: '자켓', value: 'event', url: '/event' },
  { id: 3, title: '점퍼', value: 'deal', url: '/deal' },
  { id: 4, title: '베스트', value: 'best', url: '/best' },
  { id: 5, title: '코트', value: 'silive', url: '/silive' },
  { id: 6, title: '다운/패딩', value: 'content', url: '/content' },
  { id: 7, title: '퍼/무스탕', value: 'ssgdf', url: '/ssgdf' },
]

export default function ProductStickyHeader() {
  const [isWrap, setIsWrap] = useState<boolean>(false)

  const itemCategories = itemCategoryDatas

  const handleWrapState = () => {
    setIsWrap((prev) => !prev)
  }

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [lastScrollY, setLastScrollY] = useState<number>(0)

  const handleScroll = () => {
    const currentScrollY = window.scrollY
    if (currentScrollY > lastScrollY) {
      // 스크롤내리기

      setIsVisible(false)
    } else if (currentScrollY < lastScrollY) {
      // 스크롤올리기
      setIsVisible(true)
    }
    setLastScrollY(currentScrollY)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <nav className={`w-full sticky ${isVisible ? 'top-[48px]' : 'top-0'}`}>
      <div
        className={`absolute top-0 left-0 w-full pl-6 bg-white box-border z-15 ${
          isWrap ? 'border-b border-gray-300' : ''
        }`}
      >
        {isWrap && (
          <div className="flex items-center justify-between">
            <p className="text-[14px] leading-[48px] text-[#787878]">ALL CATEGORIES</p>
          </div>
        )}
        <div className="flex">
          {isWrap ? null : (
            <Link
              href="/"
              className="text-black font-medium pr-6 h-[48px] text-[16px] leading-[48px] tracking-[0.4px] whitespace-nowrap"
            >
              전체
            </Link>
          )}
          <ul className={`flex  ${isWrap ? 'flex-wrap' : 'overflow-x-auto no-scrollbar'}`}>
            {isWrap ? (
              <Link
                href="/"
                className="text-black font-medium pr-6 h-[48px] text-[16px] leading-[48px] tracking-[0.4px] whitespace-nowrap"
              >
                전체
              </Link>
            ) : null}
            {itemCategories.map((item) => (
              <li key={item.id} className={`${isWrap ? '' : 'border-b border-gray-300'}`}>
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
