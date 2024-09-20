import React from 'react'
import EssentialSignUpField from './EssentialSignUpField'
import Divider from '@/components/ui/Divider'
import OptionalSignUpField from './OptionalSignUpField'
import RightsSignUpField from './RightsSignUpField'
import { formDataToSignupFormType, transformToSignupData } from '@/components/util/SignUpFormConverter'
import { postNewUser } from '@/actions/auth/postSignUpData'

export default function SignUpForm() {
  const handleSignUp = async (simpleSignUpFormData: FormData) => {
    'use server'
    // console.log('data', transformToSignupData(formDataToSignupFormType(simpleSignUpFormData)))
    const convertedForm = transformToSignupData(formDataToSignupFormType(simpleSignUpFormData))

    const res = await postNewUser(convertedForm)

    if (res === false) {
      console.log('signupform 회원가입 실패 알림', res)
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
