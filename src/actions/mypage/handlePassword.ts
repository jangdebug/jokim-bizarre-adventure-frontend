import { newPasswordType } from '@/types/MyPageTypes'

export async function changePasswordAction(newPasswordForm: FormData) {
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
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  })

  console.log('res --> ', res)

  if (res.status === 200) {
    return 'success'
  }
  return 'fail'
}
