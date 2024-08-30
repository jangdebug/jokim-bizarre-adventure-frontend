import React from 'react'
import EssentialSignUpField from './EssentialSignUpField'

export default function SignUpForm({
  handleSignUp,
}: {
  handleSignUp: (formData: FormData) => void
}) {
  return (
    <div className="px-[24px] pb-[80px]">
      <form action="">
        <EssentialSignUpField />
      </form>
    </div>
  )
}
