'use client'

import AddressInput from './optional-form-item/AddressInput'
import BirthSelectForm from './optional-form-item/BirthSelectForm'
import MarketingAgreement from './optional-form-item/MarketingAgreement'

export default function OptionalSignUpField() {
  return (
    <section className="mt-[37px] pb-[40px] px-[24px]">
      <p className="text-[18px] leading-[22px] text-[#131922] font-bold">선택항목</p>
      <BirthSelectForm />
      <AddressInput />
      <MarketingAgreement />
    </section>
  )
}
