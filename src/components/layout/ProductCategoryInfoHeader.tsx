//optional catch-all 세그먼트를 사용
// slug 의 길이가 2 이상이면 마지막 2개를
// 2개면 2개 사용
// slug 의 길이가 2 이상이면 첫 번째 li 앞에도 :before 을 사용해 화살표 출력
'use client'

import { useScrollEvent } from '@/hooks/UseScrollEvent'
import Link from 'next/link'

export default function ProductCategoryInfoHeader({ categoryInfo }: { categoryInfo?: string[] }) {
  // const catgoryInfo: string[] = ['아우터', '여성의류']
  const isVisible = useScrollEvent()

  return (
    <header className={`bg-white h-[48px] w-full z-[101] ${isVisible ? 'sticky top-0' : ''}`}>
      <ul className="flex items-center pr-[16px] pl-[24px]  box-border bg-[#fff] ">
        {categoryInfo?.map((category, index) => (
          <li
            key={index}
            className={`category-item relative text-[16px] leading-[19px] p-[16px_18px_13px_0] overflow-ellipsis text-left`}
          >
            <Link href={'/product'}>{category}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
