import InputWithClear from '@/components/dummy/InputWithClear'
import React from 'react'
import { useFormValidation } from '@/hooks/UseFormValidation'

export default function PasswordInput() {
  const { values, isEmpty, errors, setValues, handleChange, handleBlur } = useFormValidation()

  return (
    <>
      <InputWithClear
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
        onClear={() => setValues((prev) => ({ ...prev, password: '' }))}
        placeholder="비밀번호"
      />
      <p className="mt-[8px] text-[#787878] text-[14px] leading-[20px]">숫자, 영문 포함 10자 이상</p>
      <p
        className={`${isEmpty.password || values.password.length > 0 ? 'pb-[8px]' : 'invisible'} ${errors.password ? 'text-[#d99c3c]' : 'text-[#db3c3c]'} text-[14px] leading-[20px]`}
      >
        {isEmpty.password || values.password.length <= 0
          ? '비밀번호를 입력해 주세요.'
          : errors.password
            ? '사용 가능한 비밀번호 입니다.'
            : '비밀번호는 10자 이상으로, 영문대소문자, 숫자 중 2가지 이상 조합으로 공백없이 설정해 주세요.'}
      </p>

      <InputWithClear
        name="confirmPassword"
        type="password"
        value={values.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        onClear={() => setValues((prev) => ({ ...prev, confirmPassword: '' }))}
        placeholder="비밀번호 확인"
      />
      <p className="mt-[8px] text-[#787878] text-[14px] leading-[20px]">숫자, 영문 포함 10자 이상</p>
      <p
        className={`${isEmpty.confirmPassword || values.confirmPassword.length > 0 ? 'pb-[8px]' : 'invisible'} ${errors.confirmPassword ? 'text-[#d99c3c]' : 'text-[#db3c3c]'} text-[14px] leading-[20px]`}
      >
        {errors.confirmPassword ? '비밀번호가 일치합니다.' : '비밀번호가 일치하지 않습니다. 다시 입력해주세요.'}
      </p>
    </>
  )
}
