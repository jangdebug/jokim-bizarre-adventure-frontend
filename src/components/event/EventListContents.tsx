import React from 'react'
import EventListContentItem from './EventListContentItem'
import { eventListType } from '@/types/ListDataTypes'

export default function EventListContents({ eventListDatas }: { eventListDatas: eventListType[] }) {
  return (
    <ul>
      {eventListDatas.map((item) => (
        <EventListContentItem eventListData={item} key={item.id} />
      ))}
    </ul>
  )
}
