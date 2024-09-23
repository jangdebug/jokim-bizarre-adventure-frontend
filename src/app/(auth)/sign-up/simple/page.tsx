import SignUpForm from '@/components/sign-up/simple/SignUpForm'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '온라인 간편가입',
}

export default function Simple() {
  return (
    <main className="w-full pb-[80px]">
      {/* <form action={handleSignUp}>
        <EssentialSignUpField />
        <Divider />
        <OptionalSignUpField />
        <Divider />
        <RightsSignUpField />
      </form> */}
      <SignUpForm />
    </main>
  )
}
