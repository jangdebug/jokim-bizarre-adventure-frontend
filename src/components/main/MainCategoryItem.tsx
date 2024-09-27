import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { getCategoryBadgeImage } from '@/actions/main/getCategoryBadgeData'

export default async function MainCategoryItem({ categoryData }: { categoryData: CategoryType }) {
  const imageUrl = await getCategoryBadgeImage(categoryData.categoryCode)

  return (
    <li>
      <Link
        className="flex flex-col justify-center items-center"
        href={{
          pathname: `/product/${categoryData.categoryName}`,
          query: {
            code: categoryData.categoryCode,
            parentName: categoryData.categoryName,
          },
        }}
      >
        <div className="object-cover w-5/6 rounded-full">
          <Image src={imageUrl} width={200} height={200} alt={categoryData.categoryName} priority />
        </div>
        <p className="h-1/5 mt-1.5 text-center text-xs lg:text-xl">
          {categoryData.categoryName.split('/').map((part, index, array) => (
            <React.Fragment key={index}>
              {part}
              {index < array.length - 1 && (
                <>
                  {'/'}
                  <br />
                </>
              )}
            </React.Fragment>
          ))}
        </p>
      </Link>
    </li>
  )
}
