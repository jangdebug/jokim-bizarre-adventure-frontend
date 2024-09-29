'use client'

import React from 'react'
import MinusButtonIcon from '../icons/basket/MinusButtonIcon'
import PlusButtonIcon from '../icons/basket/PlusButtonIcon'
import { basketQuantityChange } from '@/actions/basket/getBasketListData'

export default function BasketItemQuantity({ basketCode, quantity }: { basketCode: string; quantity: number }) {
  const handlePrice = async (option: number) => {
    const changePrice = await basketQuantityChange(basketCode, quantity, option)
  }

  return (
    <div className="flex border-[1px]">
      <div className="w-6 border-r-[1px] flex justify-center items-center" onClick={() => handlePrice(1)}>
        <div className="w-6 border-r-[1px] flex justify-center items-center">
          <MinusButtonIcon />
        </div>
      </div>

      <div className="w-16 border-r-[1px]">
        <p className="text-center">{quantity}</p>
      </div>

      <div className="w-6 flex justify-center items-center" onClick={() => handlePrice(2)}>
        <div className="w-6 flex justify-center items-center">
          <PlusButtonIcon />
        </div>
      </div>
    </div>
  )
}
