'use client'

import { Checkbox } from '@/components/ui/checkbox'
import InputWithClear from '@/components/dummy/InputWithClear'
import { useFormValidation } from './hooks/UseFormValidation'
import PhoneInput from './esseitial-form-item/PhoneInput'
import EmailImput from './esseitial-form-item/EmailImput'
import PasswordInput from './esseitial-form-item/PasswordInput'

export default function EssentialSignUpField() {
  const { values, errors, isEmpty, setValues, handleChange, handleBlur } = useFormValidation()

  // const clearInput = (name: string) => {
  //   setValues((prev) => ({ ...prev, [name]: '' }))
  // }

  return (
    <div className="pt-[22px] py-[40px] px-[24px]">
      <p className="text-[18px] leading-[22px] text-[#131922] font-bold">필수항목</p>
      <div className="mt-[20px] flex flex-col">
        <EmailImput />
        <PasswordInput />
        <InputWithClear
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          onClear={() => setValues((prev) => ({ ...prev, name: '' }))}
          placeholder="이름"
        />
        <p
          className={`${isEmpty.name ? 'pb-[16px]' : 'invisible pb-[16px]'} text-[#db3c3c] text-[14px] leading-[20px]`}
        >
          {errors.name ? '' : '이름을 입력해 주세요.'}
        </p>

        <PhoneInput />
      </div>

      <div className="mt-[16px] flex justify-between items-center">
        <label className="  text-[14px] text-[#404040] leading-[20px] font-[500]">
          <div className="flex items-center gap-[8px]">
            <Checkbox name="isOverFourTeen" value={'true'} />
            <span>만 14세 이상입니다.(필수)</span>
          </div>
        </label>
      </div>
    </div>
  )
}
