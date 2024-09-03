'use client'

import SearchIcon from '../icons/auth-service-header/SearchIcon'
import BasketIcon from '../icons/auth-service-header/BasketIcon'
import Image from 'next/image'
import MainHeaderLogo from '../icons/main-header/MainHeaderLogo.png'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function MainHeader() {
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
    <header
      className={`flex flex-col justify-center w-full h-[56px] px-[16px] bg-white ${isVisible ? 'sticky top-0 left-0' : ''}`}
    >
      <nav>
        <ul className="">
          <li className="absolute left-0 top-0 ">
            <Link href={'/'}>
              <Image src={MainHeaderLogo} alt="mainHeaderLogo" priority={true} />
            </Link>
          </li>

          <li>
            <ul className="flex justify-end gap-4">
              <li>
                <Link href={'/'}>
                  <SearchIcon />
                </Link>{' '}
              </li>
              <li className="relative">
                <Link href={'/'}>
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
