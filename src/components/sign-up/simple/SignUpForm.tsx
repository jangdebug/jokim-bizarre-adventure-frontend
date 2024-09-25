import EssentialSignUpField from './EssentialSignUpField'
import Divider from '@/components/ui/Divider'
import OptionalSignUpField from './OptionalSignUpField'
import RightsSignUpField from './RightsSignUpField'
import { formDataToSignupFormType, transformToSignupData } from '@/components/util/SignUpFormConverter'
import { postNewUser } from '@/actions/auth/userData'
import { redirect } from 'next/navigation'

export default function SignUpForm() {
  const handleSignUp = async (simpleSignUpFormData: FormData) => {
    'use server'
    // console.log('data', transformToSignupData(formDataToSignupFormType(simpleSignUpFormData)))
    const convertedForm = transformToSignupData(formDataToSignupFormType(simpleSignUpFormData))

    try {
      const res = await postNewUser(convertedForm)
      if (res) {
        redirect('/sign-in')
      }
    } catch (error) {
      console.error('sign in error', error)
    }

    // if (res) {
    //   // signIn('credentials', {
    //   //   email: convertedForm.email as string,
    //   //   password: convertedForm.password as string,
    //   //   redirect: true,
    //   //   callbackUrl: '/',
    //   // })
    // }

    // if (res === false) {
    //   console.log('signupform 회원가입 실패 알림', res)
    // }
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
