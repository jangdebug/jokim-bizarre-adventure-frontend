import SignUpForm from '@/components/sign-up/simple/SignUpForm'
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
    <div className="w-full">
      <SignUpForm handleSignUp={handleSignUp} />
    </div>
  )
}
