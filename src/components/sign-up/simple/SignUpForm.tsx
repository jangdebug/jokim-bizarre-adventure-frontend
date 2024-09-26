import EssentialSignUpField from './EssentialSignUpField'
import Divider from '@/components/ui/Divider'
import OptionalSignUpField from './OptionalSignUpField'
import RightsSignUpField from './RightsSignUpField'
import { formDataToSignupFormType, transformToSignupData } from '@/components/util/SignUpFormConverter'
import { redirect } from 'next/navigation'
import { validateForm } from '@/hooks/EssentialFormValidate'
import { postNewUser } from '@/actions/auth/userData'

export default function SignUpForm() {
  const handleSignUp = async (simpleSignUpFormData: FormData) => {
    'use server'
    console.log('raw', formDataToSignupFormType(simpleSignUpFormData))
    const convertedForm = formDataToSignupFormType(simpleSignUpFormData)
    if (!validateForm(convertedForm)) {
      console.log('입력정보를 확인하세요')
    } else {
      const res = await postNewUser(transformToSignupData(convertedForm))

      if (res) {
        console.log('sign in success')
        redirect('/sign-in')
      }
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
