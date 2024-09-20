'use client'

import { bestTabDatas } from '@/datas/dummy/best/BestTabDatas'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function BestHidingTab() {
  const pathName = usePathname()
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY // 현재 스크롤 위치
      const targetPosition = 200

      if (scrollTop > targetPosition) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <ul
      className={`${isSticky ? 'z-10 sticky top-12 visible border border-t-2' : 'hidden'} bg-[#F8F8F8] grid grid-cols-3`}
    >
      {bestTabDatas.map((menu) => (
        <Link href={menu.url} key={menu.id}>
          <li className={`py-2 ${pathName === menu.url ? 'bg-[#141A23] text-white' : 'text-black'}`}>
            <p className="font-bold text-center text-sm">{menu.name}</p>
          </li>
        </Link>
      ))}
    </ul>
  )
}
