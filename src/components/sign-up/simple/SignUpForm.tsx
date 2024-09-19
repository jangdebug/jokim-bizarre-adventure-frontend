import React from 'react'
import EssentialSignUpField from './EssentialSignUpField'
import Divider from '@/components/ui/Divider'
import OptionalSignUpField from './OptionalSignUpField'
import RightsSignUpField from './RightsSignUpField'
import { formDataToSignupFormType, transformToSignupData } from '@/components/util/SignUpFormConverter'

export default function SignUpForm() {
  const handleSignUp = async (simpleSignUpFormData: FormData) => {
    'use server'
    // console.log('data', transformToSignupData(formDataToSignupFormType(simpleSignUpFormData)))
    const convertedForm = transformToSignupData(formDataToSignupFormType(simpleSignUpFormData))

    try {
      const res = await fetch(`${process.env.API_BASE_URL}/v1/auth/sign-up/simple`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(convertedForm),
      })
      if (res.ok) {
        console.log('회원가입이 완료되었습니다.')
      } else {
        console.log('회원가입에 실패했습니다.')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form action={handleSignUp}>
      <EssentialSignUpField />
      <Divider />
      <OptionalSignUpField />
      <Divider />
      <RightsSignUpField />
    </form>
  )
}
