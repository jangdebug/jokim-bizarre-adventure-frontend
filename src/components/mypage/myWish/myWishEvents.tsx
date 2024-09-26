import { myWishEventType } from '@/types/MyPageTypes'
import React from 'react'
import MyWishEventItem from './myWishEventItem'

interface eventProps {
  wishEventDatas: myWishEventType[]
}

export default function MyWishEvents({ wishEventDatas }: eventProps) {
  return (
    <div>
      <ul className="w-full">
        {wishEventDatas && wishEventDatas.map((item) => <MyWishEventItem eventItem={item} key={item.id} />)}
      </ul>
    </div>
  )
}
