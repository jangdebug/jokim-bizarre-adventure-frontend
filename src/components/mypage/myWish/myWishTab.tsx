'use client'

import { myTabType } from '@/types/MyPageTypes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface tabProps {
  tabData: myTabType[]
}

export default function MyTab({ tabData }: tabProps) {
  const activeTabClass = 'border-b-2 border-black text-black'
  const inactiveTabClass = 'border-b border-gray-300 text-gray-500'

  const currentURI = usePathname()

  return (
    <div>
      <ul className="w-full flex justify-between">
        {tabData &&
          tabData.map((path) => (
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
