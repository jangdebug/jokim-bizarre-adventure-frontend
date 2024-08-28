'use client'
import React, { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import BasketIcon from '../icons/auth-service-header/BasketIcon'
import SearchIcon from '../icons/auth-service-header/SearchIcon'
import TitleHeader from '../ui/TitleHeader'
import LeftArrowIcon from '../icons/auth-service-header/LeftArrowIcon'

export default function AuthServiceHeader() {
  const pathName = usePathname()

  const [title, setTitle] = useState<string>('')

  useEffect(() => {
    if (pathName === '/sign-in') {
      setTitle('로그인')
    } else if (pathName === '/sign-up') {
      setTitle('회원가입')
    }
  }, [pathName])

  return (
    <header className="flex flex-col justify-center w-full h-[56px] px-[16px]">
      <nav>
        <ul className="flex justify-between">
          <li>
            <LeftArrowIcon />
          </li>
          <li className=" absolute left-[50%] translate-x-[-50%]">
            <TitleHeader title={title} textStyle="text-xl" />
          </li>
          <li>
            <ul className="flex gap-4">
              <li>
                <SearchIcon />
              </li>
              <li>
                <BasketIcon />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
