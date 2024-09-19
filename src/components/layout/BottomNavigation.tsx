'use client'
import Link from 'next/link'
import CategoryIcon from '../icons/bottom-navigation/CategoryIcon'
import BrandIcon from '../icons/bottom-navigation/BrandIcon'
import MyPageIcon from '../icons/bottom-navigation/MyPageIcon'
import DefaultHistoryIcon from '../icons/bottom-navigation/DefaultHistoryIcon'
import Image from 'next/image'
import BottomNavLogo from '../icons/bottom-navigation/BottomNavLogo.png'
import ToTopButton from '../util/ToTopButton'
import { useScrollEvent } from '@/hooks/UseScrollEvent'

export default function BottomNavigation({ withFadeOption = false }: { withFadeOption?: boolean }) {
  const isVisible = useScrollEvent()

  return (
    <>
      <ToTopButton moveWithBottomNav={withFadeOption ? isVisible : false} />
      <nav
        className={` ${withFadeOption ? (!isVisible ? `h-[56px]` : 'h-0') : `h-[56px]`} transition-all duration-500 ease-in-out fixed w-full bottom-0 left-0 z-[111] overflow-hidden  border-t border-gray-300 bg-white `}
      >
        <ul className=" flex justify-around w-full items-center ">
          <li className="overflow-x-hidden w-full  box-border flex items-center justify-center ">
            <Link
              href={'/category'}
              className="w-full h-full py-[6px] flex flex-col items-center justify-center box-border"
            >
              <CategoryIcon />
              <span className="text-[10px] leading-[12px] pb-[3px] text-[#929292] ">category</span>
            </Link>
          </li>
          <li className="overflow-x-hidden w-full  box-border flex items-center justify-center ">
            <Link
              href={'/brand'}
              className="w-full h-full py-[6px] flex flex-col items-center justify-center box-border"
            >
              <BrandIcon />
              <span className="text-[10px] leading-[12px] pb-[3px] text-[#929292] ">BRAND</span>
            </Link>
          </li>
          <li className="overflow-x-hidden w-[75px] shrink-0  box-border flex items-center justify-center ">
            <Link href={'/'} className="w-full h-full py-[6px] flex flex-col items-center justify-center box-border">
              <Image src={BottomNavLogo} alt="main image" width={0} height={0} />
            </Link>
          </li>
          <li className="overflow-x-hidden w-full  box-border flex items-center justify-center ">
            <Link
              href={'/mypage'}
              className="w-full h-full py-[6px] flex flex-col items-center justify-center box-border"
            >
              <MyPageIcon />
              <span className="text-[10px] leading-[12px] pb-[3px] text-[#929292] ">MY</span>
            </Link>
          </li>
          <li className="overflow-x-hidden w-full  box-border flex items-center justify-center ">
            <Link
              href={'/test'}
              className="w-full h-full py-[6px] flex flex-col items-center justify-center box-border"
            >
              <DefaultHistoryIcon />
              <span className="text-[10px] leading-[12px] pb-[3px] text-[#929292] ">Recent</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}
