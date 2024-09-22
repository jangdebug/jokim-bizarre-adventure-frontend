'use client'

import { orderCustomerType } from '@/types/OrderTypes'
import DownArrowIcon from '@/components/icons/footer/DownArrowIcon.png'
import UpArrowIcon from '@/components/icons/footer/UpArrowIcon.png'
import Image from 'next/image'
import React, { useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { orderPhoneDatas } from '@/datas/dummy/order/orderDatas'
import { Input } from '../ui/input'

export default function OrderCustomer({ orderCustomer }: { orderCustomer: orderCustomerType }) {
  const [isDetail, setIsDetail] = useState<boolean>(false)
  const toggleDetailHandler = () => {
    setIsDetail(!isDetail)
  }

  return (
    <section className="px-[24px]">
      <div className="my-[16px] flex justify-between">
        <p className="text-xl font-bold">주문고객</p>
        <div className="flex items-center">
          <div className={`flex items-center gap-4 text-sm ${isDetail ? 'hidden' : ''}`}>
            <p className="pr-[16px] border-r-[2px]">{orderCustomer.name}</p>
            <p className="mr-2">{orderCustomer.phone}</p>
          </div>
          <button type="button" onClick={toggleDetailHandler}>
            {isDetail ? (
              <Image src={UpArrowIcon} alt="upArrowIcon" />
            ) : (
              <Image src={DownArrowIcon} alt="downArrowIcon" />
            )}
          </button>
        </div>
      </div>

      <div
        className={` overflow-hidden transition-all duration-500 ease-in-out h-0 flex flex-col gap-2 ${isDetail ? `h-[250px]` : 'h-0'}`}
      >
        <Input type="text" name="customerName" defaultValue={orderCustomer.name} placeholder="주문하시는 분" />
        <Input type="text" name="customerEmail" defaultValue={orderCustomer.name} placeholder="이메일 주소" />
        <div className="flex justify-between items-center gap-2">
          <div className="w-2/5">
            <select
              className="w-full bg-white border border-gray-400 px-4 py-2 pr-8 "
              name="customerCellNo"
              defaultValue={orderCustomer.phone.replace(/-/g, '').slice(0, 3)}
            >
              {orderPhoneDatas.map((option) => (
                <option key={option.id} value={option.dispCellNo}>
                  {option.dispCellNo}
                </option>
              ))}
            </select>
          </div>
          <Input type="text" name="customerPhone" defaultValue={orderCustomer.phone.replace(/-/g, '').slice(3)} />
        </div>

        <div className="mt-[8px] mb-[20px] flex flex-col gap-2 text-xs text-gray-400">
          <p>주문고객님의 정보로 주문정보(주문완료, 배송상태 등)를 안내해 드립니다.</p>
          <p>변경정보는 이번 주문에만 적용되며, 고객님의 회원정보는 변경되지 않습니다.</p>
        </div>
      </div>
    </section>
  )
}
