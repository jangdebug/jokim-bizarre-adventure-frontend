import { categoryBadgeType } from '@/types/InitialDataTypes'
import React from 'react'
import MainCategoryItem from './MainCategoryItem'

export default function MainCategory({
  categoryBadgeListData,
}: {
  categoryBadgeListData: categoryBadgeType[]
}) {
  return (
    <section className="w-11/12 mx-auto my-5 object-contain">
      <ul className="grid grid-cols-5 gap-3">
        {categoryBadgeListData.map((item) => (
          <MainCategoryItem categoryBadgeData={item} key={item.categoryId} />
        ))}
      </ul>
    </section>
  )
}
