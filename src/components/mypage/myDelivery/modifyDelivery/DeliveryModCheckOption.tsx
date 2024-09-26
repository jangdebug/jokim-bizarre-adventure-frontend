import { Checkbox } from '@/components/ui/checkbox'
import React from 'react'

export default function DeliveryModCheckOption({ isOption }: { isOption: boolean }) {
  return (
    <div className="pt-3 pb-5 font-bold flex justify-between">
      <div className="flex items-center text-gray-400">
        <Checkbox name="addDelivery" id="add" defaultChecked={true} className="bg-gray-400" disabled />
        <label className="mx-3" htmlFor="add">
          배송지 목록에 추가
        </label>
      </div>
      <div className="flex items-center">
        <Checkbox name="isDefault" id="default" defaultChecked={isOption} />
        <label className="mx-3" htmlFor="default">
          기본 배송지로 설정
        </label>
      </div>
    </div>
  )
}
