import EssentialSignUpField from '@/components/sign-up/simple/EssentialSignUpField'
import OptionalSignUpField from '@/components/sign-up/simple/OptionalSignUpField'
import RightsSignUpField from '@/components/sign-up/simple/RightsSignUpField'
import Divider from '@/components/ui/Divider'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '온라인 간편가입',
}

export default function Simple() {
  const handleSignUp = async (simpleSignUpFormData: FormData) => {
    'use server'
    console.log('data', simpleSignUpFormData)
  }
  return (
    <main className="w-full pb-[80px]">
      <form action={handleSignUp}>
        <EssentialSignUpField />
        <Divider />
        <OptionalSignUpField />
        <Divider />
        <RightsSignUpField />
      </form>{' '}
    </main>
  )
}
