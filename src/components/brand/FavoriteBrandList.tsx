import { favoiteBrandCodeListType } from '@/types/BrandTypes'
import React from 'react'
import FavoriteBrandListItem from './FavoriteBrandListItem'

interface listProps {
  favoriteList: favoiteBrandCodeListType[]
}

export default function FavoriteBrandList({ favoriteList }: listProps) {
  return (
    <div>
      <ul>
        {favoriteList.length > 0 ? (
          favoriteList?.map((item) => <FavoriteBrandListItem key={item.brandCode} brandCode={item.brandCode} />)
        ) : (
          <li className="py-[20px] px-[24px] flex flex-col items-center text-sm text-[#929292]">
            <p>내가 찜한 브랜드가 없습니다.</p>
            <p>브랜드를 추가해보세요.</p>
          </li>
        )}
      </ul>
    </div>
  )
}
