import React from 'react'
import { myCategoryItemProps } from '../myInfoCategory'
import Image from 'next/image'
import Link from 'next/link'

export default function MyInfoCategoryItem({ item }: { item: myCategoryItemProps }) {
  return (
    <Link href={item.src}>
      <li className="text-base leading-[3rem] border-b border-[#f0f0f0] flex justify-between">
        <span>{item.content}</span>
        <Image
          src={`https://cdn-mo.sivillage.com/mo/assets/comm/image/icon_arrow_right.svg`}
          width={20}
          height={20}
          alt={`마이페이지에서 이동`}
          priority
        />
      </li>
    </Link>
  )
}
