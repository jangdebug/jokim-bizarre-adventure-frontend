'use client'

import React from 'react'
import LeftArrowIcon from '../icons/basket/LeftArrowIcon'
import HomeIcon from '../icons/basket/HomeIcon'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function OrderHeader() {
  const router = useRouter()

  const handleClick = () => {
    router.back()
  }

  return (
    <header className="h-[56px] flex items-center">
      <div className="ml-4 flex gap-3">
        <button onClick={handleClick}>
          <LeftArrowIcon />
        </button>
        <Link href="/">
          <HomeIcon />
        </Link>
      </div>
      <div className="flex-grow flex justify-center mr-[92px]" style={{ width: 'calc(100% - 190px)' }}>
        <span className="text-lg font-bold">주문서</span>
      </div>
      <div></div>
    </header>
  )
}
