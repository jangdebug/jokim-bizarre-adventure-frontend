import React, { useState } from 'react'

import CheckboxWithSvg from '@/components/dummy/CheckboxWithSvg'
import RightArrowIcon from '@/components/icons/sign-up/RightArrowIcon'

import Link from 'next/link'
import { marketingAgreementsData } from '@/datas/dummy/sign-up/SignUpDatas'

export default function MarketingAgreement() {
  const [marketingAgreements, setMarketingAgreements] = useState<marketingAgreementType[]>(marketingAgreementsData)

  const isAllChecked = (): boolean => {
    return marketingAgreements.every((agreement) => agreement.agreementState)
  }

  const checkMarketingAgreement = (): boolean => {
    return marketingAgreements.some((agreement) => agreement.agreementState)
  }

  const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const allSelected = e.target.checked

    setMarketingAgreements((prevAgreements) =>
      prevAgreements.map((agreement) => ({
        ...agreement,
        agreementState: allSelected,
      })),
    )
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target

    setMarketingAgreements((prevAgreements) =>
      prevAgreements.map((agreement) =>
        agreement.description === name ? { ...agreement, agreementState: checked } : agreement,
      ),
    )
  }

  return (
    <>
      <p className="mt-[33px] mb-[13px] text-[16px] leading-[22px] text-[#131922] font-bold">마케팅정보 수신동의</p>
      <div className="mt-[16px] flex justify-between items-center">
        <label className="  text-[14px] text-[#404040] leading-[20px] font-[500]">
          <div className="flex items-center gap-[8px]">
            <CheckboxWithSvg checked={checkMarketingAgreement()} onChange={handleSelectAllChange} />

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
        수신 미동의 시 신세계인터내셔날에서 진행하는 이벤트 및 할인, 인기/신상품 등의 정보를 받아보실 수 없으며, 이벤트
        및 추가 혜택 제공 대상에서 제외될 수 있습니다.
      </p>
      <ul className="mt-[8px] marker:text-[6px] list-disc pl-[16px]">
        <li className=" text-[#787878] tracking-[-0.3px] leading-[18px] text-[12px]">
          회원가입/구매/회사의 주요정책 관련 정보는 수신동의와 관계없이 모든 회원에게 발송됩니다.
        </li>
      </ul>

      <ul className="grid grid-cols-2 gap-y-[13px] mt-[24px]">
        <li key={3} className="col-span-2 flex flex-row items-center gap-[8px]">
          <label className="text-[14px] leading-[20px] text-[#404040] font-[500] flex items-center gap-[8px]">
            <CheckboxWithSvg checked={isAllChecked()} onChange={handleSelectAllChange} />
            전체수신
          </label>
        </li>

        {marketingAgreements.map((agreement) => (
          <li key={agreement.description} className=" flex flex-row items-center gap-[8px]">
            <label className="text-[14px] leading-[20px] text-[#404040] font-[500] flex items-center gap-[8px]">
              <CheckboxWithSvg
                name={agreement.description}
                checked={agreement.agreementState}
                onChange={handleCheckboxChange}
              />
              {agreement.title}
            </label>
          </li>
        ))}
      </ul>
    </>
  )
}
