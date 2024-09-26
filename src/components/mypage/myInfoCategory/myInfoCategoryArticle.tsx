import React from 'react'
import { myCategoryProps } from '../myInfoCategory'
import MyInfoCategoryItem from './myInfoCategoryItem'
import Link from 'next/link'
import Image from 'next/image'
import MyLogOut from '../myLogout'

export default function MyInfoCategoryArticle({ category }: { category: myCategoryProps }) {
  return (
    <div className="w-[89%] m-auto mb-5">
      {!category.item || category.item.length === 0 ? (
        <Link href={`/membership`}>
          <div className="border-b-2 border-black flex justify-between items-center py-2">
            <span className="text-sm font-bold leading-10">{category.title}</span>
            <Image
              src="https://cdn-mo.sivillage.com/mo/assets/comm/image/icon_arrow_right.svg"
              width={20}
              height={20}
              alt="마이페이지에서 이동"
              priority
            />
          </div>
        </Link>
      ) : (
        <div className="border-b-2 border-black py-2">
          <span className="text-sm font-bold leading-10">{category.title}</span>
        </div>
      )}

      <ul>
        {category.item && category.item.length > 0
          ? category.item.map((item, itemIndex) => <MyInfoCategoryItem item={item} key={itemIndex} />)
          : null}
        <li>
          <MyLogOut />
        </li>
      </ul>
    </div>
  )
}
