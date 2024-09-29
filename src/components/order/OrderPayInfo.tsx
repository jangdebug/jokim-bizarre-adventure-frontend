import { basketListType } from '@/types/BasketTypes'
import React from 'react'
import Divider from '../ui/Divider'
import { getTotalOrderPrice } from '@/actions/order/getOrderData'

export default async function OrderPayInfo({ basketListDatas }: { basketListDatas: basketListType[] }) {
  const payDelivery = 0

  const totalOrderPrice = await getTotalOrderPrice(basketListDatas)

  return (
    <section>
      <div className="px-[24px]">
        <div className="py-[16px] border-black border-b-[1px]">
          <p className="text-xl font-bold">결제정보</p>
        </div>

        <div className="pb-[16px] border-black border-b-[1px]">
          <p className="my-[12px] font-bold flex justify-between">
            <span>주문 금액</span>
            <span>{totalOrderPrice.toLocaleString()} 원</span>
          </p>
          <div className="pl-[12px] border-l-[2px] text-sm text-gray-500">
            <p className="mb-[8px] flex justify-between">
              <span>상품 금액</span>
              <span>{totalOrderPrice.toLocaleString()} 원</span>
            </p>
            <p className="flex justify-between">
              <span>배송비</span>
              <span>{payDelivery} 원</span>
            </p>
          </div>
        </div>

        <div className="mt-[16px] mb-[40px] text-xl font-bold flex justify-between">
          <p>최종 결제금액</p>
          <p className="text-[#e19c5b]">
            {totalOrderPrice.toLocaleString()} <span className="text-base">원</span>
          </p>
        </div>
      </div>
      <Divider />
      <div className="px-[24px]">
        <div className="py-[16px]">
          <p className="text-xl font-bold">적립예정 포인트</p>
        </div>
        <div className="mt-[12px] mb-[24px] text-sm flex justify-between">
          <p>S.I.포인트</p>
          <p className="font-bold">{(Math.round((totalOrderPrice * 0.005) / 10) * 10).toLocaleString()} P</p>
        </div>
      </div>
    </section>
  )
}
