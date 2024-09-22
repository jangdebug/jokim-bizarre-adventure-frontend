import React from 'react'
import BasketGiftIcon from '../icons/basket/BasketGiftIcon'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function BasketStickyBottom({ totalAmount }: { totalAmount: number }) {
  return (
    <div className="w-full fixed bottom-0 h-[60px] bg-white border-[1px] flex z-[11]">
      <div className="w-1/3 flex justify-center items-center">
        <BasketGiftIcon />
        <span>선물하기</span>
      </div>

      <Link href="/order" className="w-2/3 bg-[#131922] flex justify-center items-center h-full">
        <span className="text-white">{totalAmount.toLocaleString()} 주문하기</span>
      </Link>
    </div>
  )
}
