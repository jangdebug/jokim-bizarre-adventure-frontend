import React from 'react'
import EssentialSignUpField from './EssentialSignUpField'
import { Button } from '@/components/ui/button'

export default function SignUpForm({ handleSignUp }: { handleSignUp: (formData: FormData) => void }) {
  return (
    <div className="px-[24px] pb-[80px]">
      <form action={handleSignUp}>
        <EssentialSignUpField />
        {/* <EssentialSignUpField_re /> */}

        <Button type="submit">test submit</Button>
      </form>
    </div>
  )
}
