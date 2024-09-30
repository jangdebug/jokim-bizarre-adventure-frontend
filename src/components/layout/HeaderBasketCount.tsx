'use client' // 이 지시어는 컴포넌트를 클라이언트에서 렌더링하도록 합니다.

import { useState, useEffect } from 'react'
import { getBasketCount } from '@/actions/basket/getBasketListData'
import { basketCountType } from '@/types/BasketTypes'

export default function HeaderBasketCount() {
  const [basketCount, setBasketCount] = useState(0)
  const [isVisible, setisVisible] = useState<boolean>(false)
  useEffect(() => {
    // 클라이언트에서 장바구니 데이터를 가져옵니다.
    const fetchBasketCount = async () => {
      const count: basketCountType = await getBasketCount()
      if (count.count > 0) {
        setBasketCount(count.count)
        setisVisible(true)
      }
    }

    fetchBasketCount()
  }, []) // 컴포넌트가 마운트될 때 한 번 실행됨

  return (
    <span
      className={` absolute
                  top-[-4px]
                  right-[-6px]
                  ${isVisible ? 'flex' : 'hidden'}
                  w-[20px]
                  h-[20px]
                  text-[10px]
                  bg-[rgb(217,156,99)]
                  text-white
                  items-center
                  justify-center
                  rounded-full
                  leading-[0]`}
    >
      {basketCount}
    </span>
  )
}
