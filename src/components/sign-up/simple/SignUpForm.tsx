import React from 'react'
import EssentialSignUpField from './EssentialSignUpField'
import { Button } from '@/components/ui/button'
import Divider from '@/components/ui/Divider'
import OptionalSignUpField from './OptionalSignUpField'
import RightsSignUpField from './RightsSignUpField'

export default function SignUpForm({ handleSignUp }: { handleSignUp: (formData: FormData) => void }) {
  return (
    <div className="pb-[80px]">
      <form action={handleSignUp}>
        <EssentialSignUpField />
        {/* <EssentialSignUpField_re /> */}
        <Divider />
        <OptionalSignUpField />
        <Divider />
        <RightsSignUpField />
      </form>
    </div>
  )
}
