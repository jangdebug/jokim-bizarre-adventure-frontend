'use client'

import { bestTabDatas } from '@/datas/dummy/best/BestTabDatas'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { createElement } from 'react'

export default function BestTabMenu() {
  const pathName = usePathname()

  return (
    <section className="my-5">
      <nav className="px-10">
        <ul className="grid grid-cols-3 justify-center items-center gap-2">
          {bestTabDatas.map((menu) => (
            <Link href={menu.url} key={menu.id}>
              <li className="flex flex-col items-center justify-center gap-2">
                <div
                  className={`
                ${pathName === menu.url ? 'bg-[#141A23]' : 'bg-[#F8F8F8]'}
                w-[72px] h-[72px] rounded-full flex justify-center items-center
                transition-all duration-300
                `}
                >
                  {createElement(menu.icon, {
                    color: pathName === menu.url ? '#fff' : '#141A23',
                    className: 'transition-all duration-300',
                  })}
                </div>
                <p className="font-bold text-center text-xs text-gray-700">{menu.name}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </section>
  )
}
