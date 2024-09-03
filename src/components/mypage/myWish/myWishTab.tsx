import React from 'react'

interface clickProps {
  isClicked: boolean
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>
}

export default function MyWishTab({ isClicked, setIsClicked }: clickProps) {
  const activeTabClass = 'border-b-2 border-black text-black'
  const inactiveTabClass = 'border-b border-gray-300 text-gray-500'

  return (
    <div className="flex">
      <div
        className={`${isClicked ? activeTabClass : inactiveTabClass} w-full flex items-center justify-center`}
        onClick={() => setIsClicked(true)}
      >
        <span>상품</span>
      </div>
      <div
        className={`${!isClicked ? activeTabClass : inactiveTabClass} w-full leading-10 flex items-center justify-center`}
        onClick={() => setIsClicked(false)}
      >
        <span>컨텐츠</span>
      </div>
    </div>
  )
}
