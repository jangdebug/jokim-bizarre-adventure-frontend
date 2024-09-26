'use client'

import { getMyDelivery, updateDefaultDelivery } from '@/actions/mypage/getMyDeliveryDatas'
import DeliveryActionButtons from './DeliveryActionButtons'
import { deliveryType } from '@/types/MyPageTypes'
import DeliveryItem from './DeliveryItem'
import DeliveryEmpty from './DeliveryEmpty'
import { useState } from 'react'

interface DeliveryListProps {
  deliveryList: deliveryType[]
  token: string | undefined
}

export default function DeliveryList({ deliveryList, token }: DeliveryListProps) {
  const [dList, setDList] = useState<deliveryType[]>(deliveryList)

  const handleDefaultSettingClick = async (formData: FormData) => {
    const res = await updateDefaultDelivery(formData)

    if (!res) console.log('Failed to update default delivery')
    else {
      const changeList: deliveryType[] = await getMyDelivery(token)
      setDList(changeList)
    }
  }

  return (
    <form action={handleDefaultSettingClick}>
      <DeliveryActionButtons dataLength={deliveryList.length} />
      <input type="hidden" name="token" value={token} />
      <section className="w-11/12 mx-auto min-h-[calc(100vh-112px)]">
        {dList.length > 0 ? (
          dList.map((info) => <DeliveryItem key={info.addressCode} info={info} changeList={setDList} token={token} />)
        ) : (
          <DeliveryEmpty />
        )}
      </section>
    </form>
  )
}
