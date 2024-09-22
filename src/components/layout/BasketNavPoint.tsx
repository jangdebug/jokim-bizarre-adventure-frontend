'use client'

import { useState } from 'react'
import DownArrowIcon from '../icons/basket/DownArrowIcon'
import UpArrowIcon from '../icons/basket/UpArrowIcon'
import { basketPointType } from '@/types/BasketTypes'

export default function BasketNavPoint({ basketPoint }: { basketPoint: basketPointType[] }) {
  const [hiddenPoint, setHiddenPoint] = useState<boolean>(true)

  const hidePointHandler = () => {
    setHiddenPoint(!hiddenPoint)
  }
  return (
    <>
      <nav className="bg-[#f0f0f0] border-b">
        <ul className="px-[24px] py-[14px] grid grid-cols-3 justify-between items-center">
          {basketPoint &&
            basketPoint.map((type, index) => (
              <li
                key={type.id}
                className={`flex-1 flex flex-col justify-center items-center 
                  ${index < basketPoint.length - 1 ? 'border-r border-gray-300' : ''}`}
              >
                <p>{type.name}</p>
                <p className={`my-1 font-bold ${hiddenPoint ? 'hidden' : ''}`}>{type.point}p</p>
              </li>
            ))}
        </ul>
      </nav>
      <div className="absolute left-1/2 transform -translate-x-1/2" onClick={hidePointHandler}>
        {hiddenPoint ? <DownArrowIcon /> : <UpArrowIcon />}
      </div>
    </>
  )
}
