import { categoryBadgeType } from '@/types/InitialDataTypes'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function MainCategoryItem({
  categoryBadgeData,
}: {
  categoryBadgeData: categoryBadgeType
}) {
  return (
    <li>
      <Link className="flex flex-col justify-center items-center" href={'/bgd'}>
        <div className="object-cover w-5/6 rounded-full">
          <Image
            src={categoryBadgeData.categoryBadgeImageUrl}
            width={200}
            height={200}
            alt={categoryBadgeData.categoryName}
            priority
          />
        </div>
        <p className="h-1/5 mt-1.5 text-center text-xs lg:text-xl">
          {categoryBadgeData.categoryName
            .split('/')
            .map((part, index, array) => (
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

export default MainCategoryItem
