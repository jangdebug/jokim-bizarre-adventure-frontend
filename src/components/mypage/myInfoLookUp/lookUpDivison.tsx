import React from 'react'
import Image from 'next/image'
import { ImageProps } from '../myInfoLookUp'
import { myLookUpType } from '@/types/MyPageTypes'

interface lookupdataProps {
  myLookUpData: myLookUpType
  lookUpIcon: ImageProps
  index: number
  length: number
}

export function LookUpDivision({ myLookUpData, lookUpIcon, index, length }: lookupdataProps) {
  const lookUpCount: number[] = [
    myLookUpData.order,
    myLookUpData.productPrepare,
    myLookUpData.deliveryPrepare,
    myLookUpData.delivering,
    myLookUpData.deliveryComplete,
  ]

  return (
    <>
      <li className="mx-1">
        <div className="flex justify-center">
          <Image src={lookUpIcon.src} width={40} height={40} alt={lookUpIcon.alt} priority />
        </div>

        <p className="w-15 mt-2 text-center">{lookUpIcon.alt}</p>
        <p className="font-bold text-center">{lookUpCount[index]}</p>
      </li>

      {index !== length - 1 && (
        <Image
          src={`https://cdn-mo.sivillage.com/mo/assets/comm/image/icon_arrow_right_25.svg`}
          width={20}
          height={20}
          alt="화살표 아이콘"
          priority
          className="translate-y-[-20px]"
        />
      )}
    </>
  )
}
