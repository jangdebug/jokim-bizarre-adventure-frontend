'use client'
import { useScrollEvent } from '@/hooks/UseScrollEvent'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function ProductCategoryInfoHeader() {
  const isVisible = useScrollEvent()
  const searchParams = useSearchParams()
  const paramsArray = [searchParams.get('parentName') || '', searchParams.get('childName') || ''].filter(
    (param) => param,
  )

  return (
    <header className={`bg-white h-[48px] w-full z-[101] ${isVisible ? 'sticky top-0' : ''}`}>
      <ul className="flex items-center pr-[16px] pl-[24px]  box-border bg-[#fff] ">
        {paramsArray?.map((category, index) => (
          <li
            key={index}
            className={`category-item relative text-[16px] leading-[19px] p-[16px_18px_13px_0] overflow-ellipsis text-left`}
          >
            <Link href={'#'}>{category}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}
