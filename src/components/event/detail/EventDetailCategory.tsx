'use client'

import { getEventCategoryItemDatas } from '@/actions/event/getEventDetail'
import { eventCategoryItemType, eventDetailTab } from '@/types/EventTypes'
import { useEffect, useRef, useState } from 'react'
import EventDetailCategoryList from './EventDetailCategoryList'
import EventDetailCategoryTop from './EventDetailCategoryTop'

interface tabProps {
  eventDetailTabDatas: eventDetailTab[]
  eventCategoryItemDatas: eventCategoryItemType[]
}

export default function EventDetailCategory({ eventDetailTabDatas, eventCategoryItemDatas }: tabProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  const [selectedTab, setSelectedTab] = useState<eventDetailTab>(eventDetailTabDatas[0])
  const [categoryItems, setCategoryItems] = useState<eventCategoryItemType[]>(eventCategoryItemDatas)

  const changeTab = (category: eventDetailTab) => {
    setSelectedTab(category)

    sectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  useEffect(() => {
    const fetchCategoryItems = async () => {
      try {
        const items = await getEventCategoryItemDatas(selectedTab)
        setCategoryItems(items)
      } catch (error) {
        console.error('Error fetching category items:', error)
      }
    }

    fetchCategoryItems()
  }, [selectedTab])

  return (
    <>
      <section ref={sectionRef} className="mt-8">
        <EventDetailCategoryTop tabs={eventDetailTabDatas} selectedTab={selectedTab} onTabClick={changeTab} />

        <div className="p-[24px] my-4">
          <span className="text-base font-bold mb-4">{selectedTab.detailTabName}</span>
        </div>

        <div className="px-[24px] mx-auto mb-40">
          <EventDetailCategoryList items={categoryItems} />
        </div>
      </section>
    </>
  )
}
