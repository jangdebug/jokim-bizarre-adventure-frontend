'use client'

import MyWishTab from '@/components/mypage/myWish/myWishTab'
import React, { useState } from 'react'

export default function MyWishPage() {
  const [isClicked, setIsClicked] = useState<boolean>(true)

  return (
    <>
      <MyWishTab isClicked={isClicked} setIsClicked={setIsClicked} />
    </>
  )
}
