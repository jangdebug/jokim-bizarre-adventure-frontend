'use client'
import CheckboxWithSvg from '@/components/dummy/CheckboxWithSvg'
import RightArrowIcon from '@/components/icons/sign-up/RightArrowIcon'
import { Button } from '@/components/ui/button'
import { rightAgreementsData } from '@/datas/dummy/sign-up/SignUpElementDatas'
import Link from 'next/link'
import React, { useState } from 'react'

export default function RightsSignUpField() {
  const [rightsAgreements, setRightsAgreements] = useState<rightAgreementsType[]>(rightAgreementsData)

  const isAllChecked = (): boolean => {
    return rightsAgreements.every((agreement) => agreement.agreementState)
  }

  const handleSelectAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const allSelected = e.target.checked

    setRightsAgreements((prevAgreements) =>
      prevAgreements.map((agreement) => ({
        ...agreement,
        agreementState: allSelected,
      })),
    )
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target

    setRightsAgreements((prevAgreements) =>
      prevAgreements.map((agreement) =>
        agreement.description === name ? { ...agreement, agreementState: checked } : agreement,
      ),
    )
  }

  return (
    <section className="pt-[40px] px-[24px]">
      <p className="text-[18px] leading-[22px] text-[#131922] font-bold">이용약관</p>
      <ul className="mt-[40px]">
        <li className="pb-[20px] border-b border-[#f0f0f0]">
          <label className="  text-[14px] text-[#404040] leading-[20px] font-[500]">
            <div className="flex items-center gap-[8px]">
              <CheckboxWithSvg checked={isAllChecked()} onChange={handleSelectAllChange} />
              <span>모두 동의합니다.</span>
            </div>
          </label>
          <p className="mt-[6px] pl-[32px] pr-[24px] text-[#787878] tracking-[-0.8px] leading-[18px] text-[11.5px]">
            전체동의는 필수 및 선택정보에 대한 동의도 포함되어 있으며, 선택항목에 대한 동의를 거부하시는 경우에도 서비스
            이용이 가능합니다.
          </p>
        </li>

        {rightsAgreements.map((agreement) => (
          <li key={agreement.description} className="py-[20px] border-b border-[#f0f0f0]">
            <>
              <div className="flex justify-between items-center">
                <label className="  text-[14px] text-[#404040] leading-[20px] font-[500]">
                  <div className="flex items-center gap-[8px]">
                    <CheckboxWithSvg
                      name={agreement.description}
                      checked={agreement.agreementState}
                      onChange={handleCheckboxChange}
                    />

                    <span>
                      <span>{agreement.title}</span>
                      <span className="text-[#d99c63]">{agreement.isEssential ? '(필수)' : '(선택)'}</span>
                    </span>
                  </div>
                </label>
                <Link href={'/sign-up/simple'}>
                  <RightArrowIcon />
                </Link>
              </div>
            </>
          </li>
        ))}
      </ul>

      <Button type="submit" size={'auth'}>
        약관동의 및 가입완료
      </Button>
    </section>
  )
}
