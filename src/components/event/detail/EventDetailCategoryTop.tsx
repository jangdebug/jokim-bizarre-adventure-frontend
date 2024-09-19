import { Checkbox } from '@/components/ui/checkbox'
import { eventDetailTab } from '@/types/EventTypes'
import React from 'react'

interface tabProps {
  tabs: eventDetailTab[]
  selectedTab: eventDetailTab
  onTabClick: (tab: eventDetailTab) => void
}

export default function EventDetailCategoryTop({ tabs, selectedTab, onTabClick }: tabProps) {
  return (
    <div className="sticky top-0 bg-white z-[1]">
      <ul className="border-t border-[#e0e0e0] grid grid-cols-2 gap-0">
        {tabs.map((tab, index) => (
          <li
            key={tab.id}
            onClick={() => onTabClick(tab)}
            className={`p-4 border-b border-[#e0e0e0] cursor-pointer
            ${index % 2 !== 0 ? '' : 'border-r'}
            ${selectedTab.detailTabName === tab.detailTabName ? 'bg-black text-white' : 'bg-white'}
          `}
          >
            {tab.detailTabName}
          </li>
        ))}
      </ul>

      <div className="px-[24px] pb-4 my-4 flex items-center gap-3">
        <Checkbox />
        <span className="text-sm font-bold">품절상품 제외</span>
      </div>
    </div>
  )
}
