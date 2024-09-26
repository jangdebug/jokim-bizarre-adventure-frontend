import { getMyWishEventData } from '@/actions/mypage/getMyWishData'
import MyWishEvents from '@/components/mypage/myWish/myWishEvents'
import MyWishItemCount from '@/components/mypage/myWish/myWishItemCount'
import { myWishEventType } from '@/types/MyPageTypes'

import React from 'react'

export default async function SearchEventTab() {
  const wishEventDatas: myWishEventType[] = await getMyWishEventData()
  return (
    <>
      <MyWishItemCount count={wishEventDatas.length} />
      <MyWishEvents wishEventDatas={wishEventDatas} />
    </>
  )
}
