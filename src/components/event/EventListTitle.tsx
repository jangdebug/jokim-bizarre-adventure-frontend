import React from 'react'
import { Button } from '../ui/button'

export default function EventListTitle() {
  const temp = 111

  return (
    <div className="py-2 px-6 mb-1 flex items-center justify-between h-full font-bold">
      <p>
        총 <span className="text-[#d99c63]">{temp}</span>건
      </p>
      <Button className="w-10 h-10 text-right">필터링</Button>
    </div>
  )
}
