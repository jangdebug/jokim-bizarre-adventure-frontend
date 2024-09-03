//optional catch-all 세그먼트를 사용
// slug 의 길이가 2 이상이면 마지막 2개를
// 2개면 2개 사용
// slug 의 길이가 2 이상이면 첫 번째 li 앞에도 :before 을 사용해 화살표 출력
'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function ProductCategoryInfoHeader() {
  const catgoryInfo: string[] = ['아우터', '여성의류']

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
    <header className={`h-[48px] w-full z-[101] ${isVisible ? 'sticky top-0' : ''}`}>
      <ul className="flex items-center pr-[16px] pl-[24px]  box-border bg-[#fff] ">
        {catgoryInfo.map((category, index) => (
          <li
            key={index}
            className={`category-item relative text-[16px] leading-[19px] p-[16px_18px_13px_0] overflow-ellipsis text-left`}
          >
            <Link href={'/'}>{category}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
