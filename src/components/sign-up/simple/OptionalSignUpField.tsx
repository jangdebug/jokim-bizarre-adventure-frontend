'use client'

import MarketingAgreement from './optional-form-item/MarketingAgreement'

export default function OptionalSignUpField() {
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
        <MarketingAgreement />
      </>
    </div>
  )
}
