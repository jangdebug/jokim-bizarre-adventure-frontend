import Link from 'next/link'
import React from 'react'

interface countProps {
  index?: number
  count: number
}

export default function MyWishItemCount({ index, count }: countProps) {
  return (
    <div className="flex justify-between items-center mx-6 my-4">
      <div className="font-bold">
        총 <span className="text-orange-500">{count}</span>개 상품
      </div>
      <div>
        {index && index !== undefined ? (
          <Link href={'/wishProductDelete'}>
            <span className="text-sm text-gray-400 border-b border-gray-400">품절상품 일괄 삭제</span>
          </Link>
        ) : null}
      </div>
    </div>
  )
}
