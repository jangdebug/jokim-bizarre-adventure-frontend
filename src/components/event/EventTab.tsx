import { eventTabBadgeType } from '@/types/InitialDataTypes'
import React from 'react'
import EventTabItem from './EventTabItem'

export default function EventTab({
  eventTabBageListDatas,
}: {
  eventTabBageListDatas: eventTabBadgeType[]
}) {
  return (
    <nav className="flex justify-center pt-6 pr-6 pb-7 pl-6">
      <ul>
        {eventTabBageListDatas.map((item) => (
          <EventTabItem eventTabBageData={item} key={item.id} />
        ))}
      </ul>
    </nav>
  )
}
