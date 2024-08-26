import Link from 'next/link'
import React from 'react'
import CategoryIcon from '../icons/CategoryIcon'
import BrandIcon from '../icons/BrandIcon'
// import BottomNavLogo from '../icons/BottomNavLogo'
import MyPageIcon from '../icons/MyPageIcon'
import DefaultHistoryIcon from '../icons/DefaultHistoryIcon'
import Image from 'next/image'
import BottomNavLogo from '../icons/BottomNavLogo.png'
export default function BottomNavigation() {
  return (
    <nav className="fixed w-full bottom-0 left-0 z-[111] overflow-hidden  bg-white ">
      <ul className=" flex justify-around w-full items-center ">
        <li className="overflow-x-hidden w-full border-t border-gray-300 box-border flex items-center justify-center h-[56px]">
          <Link
            href={'/'}
            className="w-full h-full py-[6px] flex flex-col items-center justify-center box-border"
          >
            <CategoryIcon />
            <span className="text-[10px] leading-[12px] pb-[3px] text-[#929292] ">
              category
            </span>
          </Link>
        </li>
        <li className="overflow-x-hidden w-full border-t border-gray-300 box-border flex items-center justify-center h-[56px]">
          <Link
            href={'/'}
            className="w-full h-full py-[6px] flex flex-col items-center justify-center box-border"
          >
            <BrandIcon />
            <span className="text-[10px] leading-[12px] pb-[3px] text-[#929292] ">
              BRAND
            </span>
          </Link>
        </li>
        <li className="overflow-x-hidden w-[75px] shrink-0 border-t border-gray-300 box-border flex items-center justify-center h-[56px]">
          <Link
            href={'/'}
            className="w-full h-full py-[6px] flex flex-col items-center justify-center box-border"
          >
            <Image src={BottomNavLogo} alt="main image" width={0} height={0} />
          </Link>
        </li>
        <li className="overflow-x-hidden w-full border-t border-gray-300 box-border flex items-center justify-center h-[56px]">
          <Link
            href={'/'}
            className="w-full h-full py-[6px] flex flex-col items-center justify-center box-border"
          >
            <MyPageIcon />
            <span className="text-[10px] leading-[12px] pb-[3px] text-[#929292] ">
              MY
            </span>
          </Link>
        </li>
        <li className="overflow-x-hidden w-full border-t border-gray-300 box-border flex items-center justify-center h-[56px]">
          <Link
            href={'/test'}
            className="w-full h-full py-[6px] flex flex-col items-center justify-center box-border"
          >
            <DefaultHistoryIcon />
            <span className="text-[10px] leading-[12px] pb-[3px] text-[#929292] ">
              Recent
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
