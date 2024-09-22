'use client'

import SearchIcon from '../icons/auth-service-header/SearchIcon'
import BasketIcon from '../icons/auth-service-header/BasketIcon'
import Image from 'next/image'
import MainHeaderLogo from '../icons/main-header/MainHeaderLogo.png'
import Link from 'next/link'
import { useScrollEvent } from '@/hooks/UseScrollEvent'

export default function MainHeader() {
  const isVisible = useScrollEvent()

  return (
    <header
      className={`z-10 flex flex-col justify-center w-full h-[56px] px-[16px] bg-white ${isVisible ? 'sticky top-0 left-0' : ''}`}
    >
      <nav>
        <ul className=" ">
          <li className="absolute left-0 top-0">
            <Link href={'/'}>
              <Image
                src={`https://image.sivillage.com/upload/C00001/s3/dspl/banner/90/411/30/240900000505411_20240904175544.gif?cVer=04055544`}
                alt="mainHeaderLogo"
                width={184}
                height={56}
              />
            </Link>
          </li>

          <li>
            <ul className="flex justify-end gap-4">
              <li>
                <Link href={'/search'}>
                  <SearchIcon />
                </Link>
              </li>
              <li className="relative">
                <Link href={'/basket'}>
                  <BasketIcon />
                </Link>
                <span
                  className={`absolute
                                                top-[-4px]
                                                right-[-6px]
                                                flex
                                                w-[20px]
                                                h-[20px]
                                                text-[10px]
                                                bg-[rgb(217,156,99)]
                                                text-white
                                                items-center
                                                justify-center
                                                rounded-full
                                                leading-[0]`}
                >
                  12
                </span>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
