'use client'

import { myWishTabDatas } from '@/datas/dummy/mypage/MyWishTab'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

export default function MyWishTab() {
  const activeTabClass = 'border-b-2 border-black text-black'
  const inactiveTabClass = 'border-b border-gray-300 text-gray-500'

  const currentURI = usePathname()

  return (
    <div>
      <ul className="w-full flex justify-between">
        {myWishTabDatas &&
          myWishTabDatas.map((path) => (
            <Link href={path.link} key={path.id} className="w-1/2">
              <li
                key={path.id}
                className={`${currentURI && path.link === currentURI ? activeTabClass : inactiveTabClass} text-center py-3`}
              >
                {path.name}
              </li>
            </Link>
          ))}
      </ul>
    </div>
  )
}
