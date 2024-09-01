'use client'
import RightArrowIcon from '@/components/icons/sign-up/RightArrowIcon'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function OptionalSignUpField() {
  const [allSelected, setAllSelected] = useState(false)
  const [selectedItems, setSelectedItems] = useState<{
    item1: boolean
    item2: boolean
    item3: boolean
    item4: boolean
  }>({
    item1: false,
    item2: false,
    item3: false,
    item4: false,
  })

  const checkboxItems = [
    { name: 'item1', label: 'Item 1' },
    { name: 'item2', label: 'Item 2' },
    { name: 'item3', label: 'Item 3' },
    { name: 'item4', label: 'Item 4' },
  ]

  const handleSelectAllChange = () => {
    const newState = !allSelected
    setAllSelected(newState)
    const updatedItems: any = checkboxItems.reduce(
      (acc, item) => {
        acc[item.name] = newState
        return acc
      },
      {} as Record<string, boolean>,
    )
    setSelectedItems(updatedItems)
  }

  const handleItemChange: React.FormEventHandler<HTMLButtonElement> = (event) => {
    console.log(event.target)

    const { name, value } = event.currentTarget // Use currentTarget to get input properties

    // setSelectedItems((prevItems) => ({
    //   ...prevItems,
    //   [name]: checked,
    // }));
  }

  return (
    <div className="mt-[37px] pb-[40px] px-[24px]">
      <p className="text-[18px] leading-[22px] text-[#131922] font-bold">선택항목</p>
      <>
        <p className="mt-[33px] mb-[13px] text-[16px] leading-[22px] text-[#131922] font-bold">생년월일</p>

        <div className="w-full h-[60px] bg-black">
          <span className="text-white">Birth Select Part</span>
        </div>
      </>
      <>
        <p className="mt-[33px] mb-[13px] text-[16px] leading-[22px] text-[#131922] font-bold">주소</p>
        <div className="w-full h-[60px] bg-black">
          <span className="text-white">address Select Part</span>
        </div>
      </>
      <>
        <p className="mt-[33px] mb-[13px] text-[16px] leading-[22px] text-[#131922] font-bold">마케팅정보 수신동의</p>
        <div className="mt-[16px] flex justify-between items-center">
          <label className="  text-[14px] text-[#404040] leading-[20px] font-[500]">
            <div className="flex items-center gap-[8px]">
              <Checkbox name="SelectAllMarketingRights" value={'true'} />
              <span>
                <span>마케팅 목적의 개인정보 수집 및 이용동의</span>
                <span className="text-[#d99c63]">(선택)</span>
              </span>
            </div>
          </label>
          <Link href={'/sign-up/simple'}>
            <RightArrowIcon />
          </Link>
        </div>

        <p className="text-[13.5px] leading-[20px] tracking-[0] text-[#404040] font-bold underline mt-[13px] ">
          수신 미동의 시 신세계인터내셔날에서 진행하는 이벤트 및 할인, 인기/신상품 등의 정보를 받아보실 수 없으며,
          이벤트 및 추가 혜택 제공 대상에서 제외될 수 있습니다.
        </p>
        <ul className="mt-[8px] marker:text-[6px] list-disc pl-[16px]">
          <li className=" text-[#787878] tracking-[-0.3px] leading-[18px] text-[12px]">
            회원가입/구매/회사의 주요정책 관련 정보는 수신동의와 관계없이 모든 회원에게 발송됩니다.
          </li>
        </ul>

        <ul className="grid grid-cols-2 gap-y-[13px]">
          <li className="col-span-2 flex flex-row items-center gap-[8px]">
            <Checkbox
              name=""
              id="test"
              value={'true'}
              onChange={() => console.log('helo')}
              onClick={handleSelectAllChange}
            />
            <label htmlFor="test" className="text-[14px] leading-[20px] text-[#404040] font-[500]">
              전체수신
            </label>
          </li>

          {checkboxItems.map((item, idx) => (
            <li key={idx} className="flex flex-row items-center gap-[8px]">
              <Checkbox id="test" name={item.name} value={'true'} onChange={handleItemChange} />
              <label htmlFor="" className="text-[14px] leading-[20px] text-[#404040] font-[500]">
                {item.label}
              </label>
            </li>
          ))}
        </ul>
      </>
    </div>
  )
}
