'use client'

import { orderDeliveryType } from '@/types/OrderTypes'
import DownArrowIcon from '@/components/icons/footer/DownArrowIcon.png'
import UpArrowIcon from '@/components/icons/footer/UpArrowIcon.png'
import React, { useState } from 'react'
import Image from 'next/image'
import { Checkbox } from '../ui/checkbox'
import { orderMessageDatas } from '@/datas/dummy/order/orderDatas'

export default function OrderDelivery({ orderDelivery }: { orderDelivery: orderDeliveryType }) {
  const [isDetail, setIsDetail] = useState<boolean>(false)
  const toggleDetailHandler = () => {
    setIsDetail(!isDetail)
  }

  return (
    <section className="px-[24px]">
      <div className="py-[20px] flex justify-between">
        <p className="text-xl font-bold">배송지</p>
        <div className="flex items-center">
          <p className={`text-sm mr-2 ${isDetail ? 'hidden' : ''}`}>
            {orderDelivery.addressRoad} {orderDelivery.addressDetail}
          </p>
          <button type="button" onClick={toggleDetailHandler}>
            {isDetail ? (
              <Image src={UpArrowIcon} alt="upArrowIcon" />
            ) : (
              <Image src={DownArrowIcon} alt="downArrowIcon" />
            )}
          </button>
        </div>
      </div>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out h-0 ${isDetail ? `h-[200px]` : 'h-0'}`}>
        <div className="flex justify-between">
          <div className="flex items-center">
            <p className="pr-2 border-black border-r-[1px] font-bold">{orderDelivery.addressName}</p>
            <p className="px-2 text-gray-500">{orderDelivery.recipient}</p>
          </div>
          <div className="px-[8px] py-[4px] border border-gray-400 flex justify-center items-center">
            <span className="text-gray-500">변경</span>
          </div>
        </div>
        <div className="my-[16px]">
          {orderDelivery.addressRoad} {orderDelivery.addressDetail}
        </div>
        <div className="my-[16px] flex justify-between items-center">
          <p className="text-xs text-gray-400">
            {orderDelivery.dispCellNo}-{orderDelivery.phone}
          </p>
          <div className="flex gap-3">
            <Checkbox id="safeNumber" name="safeNum" />
            <label htmlFor="safeNumber" className="text-gray-600">
              안심번호 사용
            </label>
          </div>
        </div>

        <div className="w-full">
          <select className="w-full bg-white border border-gray-400 px-4 py-2 pr-8 " defaultValue="default">
            <option value="default" disabled>
              배송메시지 선택
            </option>
            {orderMessageDatas.map((option) => (
              <option key={option.id} value={option.content}>
                {option.content}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  )
}
