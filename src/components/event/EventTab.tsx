'use client'

import { eventTabBadgeType } from '@/types/InitialDataTypes'
import React, { useState } from 'react'
import EventTabItem from './EventTabItem'

interface EventTabProps {
  eventTabBageListDatas: eventTabBadgeType[]
  initialCheckedId: number
}

export default function EventTab({ eventTabBageListDatas }: EventTabProps) {
  const [checkedId, setCheckedId] = useState<number>(1)

  const handleToggle = (id: number) => {
    setCheckedId((prevId) => (prevId === id ? 1 : id))
  }

  return (
    <>
      <nav className="h-[152px] flex justify-center pt-6 pr-6 pb-7 pl-6">
        {eventTabBageListDatas.map((item) => (
          <EventTabItem
            eventTabBageData={item}
            key={item.id}
            isSelected={checkedId === item.id}
            onClick={() => handleToggle(item.id)}
          />
        ))}
      </nav>
      <div></div>
    </>
  )
}
