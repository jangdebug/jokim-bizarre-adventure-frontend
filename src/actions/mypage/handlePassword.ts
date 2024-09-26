import { options } from '@/app/api/auth/[...nextauth]/options'
import { newPasswordType } from '@/types/MyPageTypes'
import { getServerSession } from 'next-auth'

async function getSessionAuth() {
  const session = await getServerSession(options)
  const isAuth = session?.user ? session.user : null

  if (!isAuth) {
    throw new Error('Unauthorized: No valid session found.')
  }

  return isAuth
}

export async function changePasswordAction(newPasswordForm: FormData) {
  const isAuth = await getSessionAuth()

  let newPassword = newPasswordForm.get('newPassword') as string
  let confirmPassword = newPasswordForm.get('confirmNewPassword') as string

  if (newPassword !== confirmPassword) {
    return 'different'
  }

  const payload: newPasswordType = {
    password: newPasswordForm.get('newPassword') as string,
  }

  const res = await fetch(`${process.env.API_BASE_URL}/v1/mypage/init-info/change-pwd`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isAuth.accessToken}`,
    },
  })

  console.log('res --> ', res)

  if (res.ok) {
    return 'success'
  }
  return 'fail'
}
