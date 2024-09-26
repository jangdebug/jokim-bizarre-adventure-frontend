import React from 'react'
import { Button } from '../ui/button'

export default function EventListTitle() {
  const temp = 111

  return (
    <div className="py-2 px-6 mb-1 flex items-center justify-between h-full font-bold">
      <p>
        총 <span className="text-[#d99c63]">{temp}</span>건
      </p>
      <button className="w-10 h-10 text-right">
        <img
          src="https://cdn-mo.sivillage.com/mo/assets/comm/image/05IconFiltersFilter3x.png"
          alt="Icon"
          className="object-contain mr-2" // Adjust the size and margin as needed
        />
      </button>
    </div>
  )
}
