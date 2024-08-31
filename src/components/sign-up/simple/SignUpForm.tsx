import React from 'react'
import EssentialSignUpField from './EssentialSignUpField'
import EssentialSignUpField_re from './EssentialSignUpField_re'

export default function SignUpForm({ handleSignUp }: { handleSignUp: (formData: FormData) => void }) {
  return (
    <div className="px-[24px] pb-[80px]">
      <form action={handleSignUp}>
        <EssentialSignUpField />
        {/* <EssentialSignUpField_re /> */}
      </form>
    </div>
  )
}
