'use client'

import DownArrowIcon from '@/components/icons/footer/DownArrowIcon.png'
import UpArrowIcon from '@/components/icons/footer/UpArrowIcon.png'
import DeliveryRightArrow from '@/components/icons/mypage/DeliveryRightArrow'
import Divider from '@/components/ui/Divider'
import { orderPolicyDatas, orderStepDatas } from '@/datas/dummy/mypage/MyOrderDatas'
import Image from 'next/image'
import React, { useState } from 'react'

export default function MyOrderPolicy() {
  const [isDetail, setIsDetail] = useState<boolean>(false)
  const toggleDetailHandler = () => {
    setIsDetail(!isDetail)
  }

  return (
    <section className="mb-48">
      <div className="px-[24px] m-auto mt-5 pb-5 flex justify-between items-center">
        <p className="flex items-center text-xl font-bold">주문/배송 단계 안내</p>
        <button type="button" onClick={toggleDetailHandler}>
          {isDetail ? <Image src={UpArrowIcon} alt="upArrowIcon" /> : <Image src={DownArrowIcon} alt="downArrowIcon" />}
        </button>
      </div>

      <Divider />

      <div className={`overflow-hidden transition-all duration-500 ease-in-out h-0 ${isDetail ? `h-[1100px]` : 'h-0'}`}>
        <div className="pb-3 bg-[#f0f0f0]">
          <ul className="w-5/6 m-auto grid grid-rows-2 grid-cols-5 gap-2">
            {orderStepDatas.map((icon) => (
              <React.Fragment key={icon.id}>
                <li className="flex flex-col items-center my-3">
                  <icon.StepImage />
                  <p className="text-center text-sm">{icon.StepName}</p>
                </li>
                {icon.id % 3 !== 0 ? (
                  <li className="flex justify-center items-center">
                    <DeliveryRightArrow />
                  </li>
                ) : null}
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className="p-[24px]">
          <ul>
            {orderPolicyDatas.map((item) => (
              <li className="flex justify-between gap-1 py-3 border-b border-b-gray-200" key={item.id}>
                <p className="w-1/5 flex-shrink-0">
                  <span className="text-xs font-bold text-gray-400 mt-4">{item.step}</span>
                </p>
                <div className="flex flex-col flex-grow">
                  <p className="text-[16px] mb-3 font-bold">{item.title}</p>
                  <div className="mb-2">
                    {item.contents.map((content, index) => (
                      <React.Fragment key={index}>
                        <p className="text-sm">{content}</p>
                      </React.Fragment>
                    ))}
                  </div>
                  <div>
                    {item.sub.map((sub, index) => (
                      <p className="text-xs text-gray-400 mb-1" key={index}>
                        - {sub}
                      </p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
