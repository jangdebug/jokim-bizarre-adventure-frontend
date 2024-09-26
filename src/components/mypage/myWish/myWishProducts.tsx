import { myWishProductType } from '@/types/MyPageTypes'
import React from 'react'

interface wishProductProps {
  wishProductDatas: myWishProductType[]
}

export default function MyWishProducts({ wishProductDatas }: wishProductProps) {
  return (
    <>
      <div>Product 상품 목록 컴포넌트</div>
    </>
  )
}
