'use client'
import React, { useEffect, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import BasketIcon from '../icons/auth-service-header/BasketIcon'
import SearchIcon from '../icons/auth-service-header/SearchIcon'
import TitleHeader from '../ui/TitleHeader'
import LeftArrowIcon from '../icons/auth-service-header/LeftArrowIcon'
import Link from 'next/link'
import { useScrollEvent } from '@/hooks/UseScrollEvent'

export default function AuthServiceHeader() {
  const pathName = usePathname()
  const router = useRouter()
  const [title, setTitle] = useState<string>('')
  const lastSegment = pathName.split('/').pop()
  const isVisible = useScrollEvent()

  const handleBackClick = () => {
    router.back()
  }

  // console.log(pathName, lastSegment)

  useEffect(() => {
    if (lastSegment === 'sign-in') {
      setTitle('로그인')
    } else if (lastSegment === 'find-account' || lastSegment === 'find-result') {
      setTitle('ID/PW 찾기')
    } else if (lastSegment === 'sign-up') {
      setTitle('회원가입')
    } else if (lastSegment === 'phone') {
      setTitle('통합 멤버십 가입')
    } else if (lastSegment === 'simple') {
      setTitle('온라인 간편가입')
    } else if (lastSegment === 'mypage') {
      setTitle('마이페이지')
    } else if (lastSegment === 'brand' || lastSegment === 'favorite') {
      setTitle('BRAND')
    }
  }, [lastSegment])

  return (
    <header
      className={`z-[100] bg-white flex flex-col justify-center w-full h-[56px] px-[16px] ${isVisible ? 'sticky top-0' : ''}`}
    >
      <nav>
        <ul className="flex justify-between">
          <li>
            <button onClick={handleBackClick}>
              <LeftArrowIcon />
            </button>
          </li>
          <li className="absolute left-[50%] translate-x-[-50%] ">
            <TitleHeader title={title} textStyle="text-[18px] font-medium leading-[34px]" />
          </li>
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
