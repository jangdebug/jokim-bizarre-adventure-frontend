'use client'

import { basketCheckUpdate } from '@/actions/basket/getBasketListData'
import CheckedBox from '../icons/sign-up/CheckedBox'
import UnCheckedBox from '../icons/sign-up/UnCheckedBox'

interface itemProps {
  basketCode: string
  isChecked: boolean
}

export default function BasketCheckBox({ basketCode, isChecked }: itemProps) {
  const handleItemCheck = async () => {
    const res = await basketCheckUpdate(basketCode, isChecked)
  }

  return (
    <>
      <input id={basketCode} className="sr-only" type="checkbox" defaultChecked={isChecked} />
      <div
        className="cursor-pointer flex items-center justify-center w-6 h-6 border-1 border-gray-300 bg-white"
        onClick={handleItemCheck}
      >
        {isChecked ? <CheckedBox /> : <UnCheckedBox />}
      </div>
    </>
  )
}
