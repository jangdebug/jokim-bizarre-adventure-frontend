'use client'
import BasketIcon from '../icons/auth-service-header/BasketIcon'
import SearchIcon from '../icons/auth-service-header/SearchIcon'
import LeftArrowIcon from '../icons/auth-service-header/LeftArrowIcon'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import HeaderBasketCount from './HeaderBasketCount'

export default function ProductPageHeader() {
  const router = useRouter()
  return (
    <header className="flex flex-col justify-center w-full h-[56px] px-[16px]">
      <nav>
        <ul className="flex justify-between items-center">
          <li>
            {/* 뒤로가기 기능으로 변경해야합니다 */}
            <button onClick={() => router.back()}>
              <LeftArrowIcon />
            </button>
          </li>

          <Link href={'/'} className="w-full border-b border-[#000] mx-[16px]  pb-[5px] text-left ">
            <span className="text-[#787878] text-[14px] leading-[17px] tracking-[-0.035em] pt-[10px] pb-[8px]">
              놓칠 수 없는 최대 30% 페이백
            </span>
          </Link>

          <li>
            <ul className="flex gap-4">
              <li>
                <Link href={'/search'}>
                  <SearchIcon />
                </Link>
              </li>
              <li className="relative">
                <Link href={'/basket'}>
                  <BasketIcon />
                </Link>
                <HeaderBasketCount />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
