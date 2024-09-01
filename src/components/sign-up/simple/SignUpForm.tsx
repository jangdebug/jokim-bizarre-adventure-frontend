import React from 'react'
import EssentialSignUpField from './EssentialSignUpField'
import { Button } from '@/components/ui/button'
import Divider from '@/components/ui/Divider'
import OptionalSignUpField from './OptionalSignUpField'

export default function SignUpForm({ handleSignUp }: { handleSignUp: (formData: FormData) => void }) {
  return (
    <div className="pb-[80px]">
      <form action={handleSignUp}>
        <EssentialSignUpField />
        {/* <EssentialSignUpField_re /> */}
        <Divider />
        <OptionalSignUpField />
        <Divider />
        <Button type="submit">test submit</Button>
      </form>
    </div>
  )
}
