'use client'

import { RadioGroup } from '@/components/ui/Radio'
import { useEffect, useState } from 'react'
import DeliveryActionButtons from './DeliveryActionButtons'
import DeliveryListItem from './DeliveryListItem'
import { updateDefaultDelivery } from '@/actions/mypage/getMyDeliveryDatas'
import { deliveryType } from '@/types/MyPageTypes'

interface DeliveryListProps {
  deliveryList: deliveryType[]
  defaultDeliveryId: number
}

export default function DeliveryList({ deliveryList, defaultDeliveryId }: DeliveryListProps) {
  const [radioValue, setRadioValue] = useState<string>(String(defaultDeliveryId))
  const [currentDefaultId, setCurrentDefaultId] = useState<number>(defaultDeliveryId)
  const [localDeliveryList, setLocalDeliveryList] = useState<deliveryType[]>(deliveryList)

  const handleRadioChange = (value: string) => {
    setRadioValue(value)
  }

  const handleDefaultSettingClick = async () => {
    try {
      const result = await updateDefaultDelivery(radioValue)

      setCurrentDefaultId(Number(radioValue))
      updateDeliveryList(Number(radioValue))

      console.log('기본 배송지로 설정되었습니다.')
    } catch (error) {
      console.error('Error updating default delivery:', error)
    }
  }

  const updateDeliveryList = (newDefaultId: number) => {
    const updatedList = [...localDeliveryList].sort((a, b) => {
      if (a.addressId === newDefaultId) return -1
      if (b.addressId === newDefaultId) return 1
      return 0
    })
    setLocalDeliveryList(updatedList)
  }

  return (
    <>
      <DeliveryActionButtons onDefaultSettingClick={handleDefaultSettingClick} />

      <section className="px-[24px] mx-auto min-h-[calc(100vh-112px)]">
        <RadioGroup defaultValue={String(currentDefaultId)} onValueChange={handleRadioChange}>
          {localDeliveryList.length > 0 && (
            <div>
              {localDeliveryList.map((info) => (
                <DeliveryListItem
                  key={info.addressId}
                  info={info}
                  isDefault={info.addressId === currentDefaultId}
                  onRadioChange={handleRadioChange}
                />
              ))}
            </div>
          )}
        </RadioGroup>
      </section>
    </>
  )
}
