import { changePasswordAction } from '@/actions/mypage/handlePassword'
import InputPassword from '@/components/mypage/myPassword/InputPassword'
import PasswordPolicy from '@/components/mypage/myPassword/PasswordPolicy'
import { redirect } from 'next/navigation'

export default async function ModPassword() {
  const handlePassword = async (newPassword: FormData) => {
    'use server'
    const res = await changePasswordAction(newPassword)

    if (res === 'success') {
      console.log('success')
      redirect('/mypage')
    } else if (res === 'fail') {
      console.log('failed to change password')
    } else if (res === 'different') {
      console.log('different Password')
    }
  }

  return (
    <main>
      <InputPassword handlePassword={handlePassword} />
      <PasswordPolicy />
    </main>
  )
}
