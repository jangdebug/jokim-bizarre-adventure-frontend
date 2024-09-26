'use server'
import { redirect } from 'next/navigation'

export const postNewUser = async (convertedForm: signupDataType) => {
  'use server'
  console.log('user signup action', convertedForm)

  try {
    const res = await fetch(`${process.env.API_BASE_URL}/v1/auth/sign-up/simple`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(convertedForm),
    })

    if (res.ok) {
      console.log('회원가입이 완료되었습니다.')

      return true
    } else {
      console.log('회원가입에 실패했습니다.')
      return false
    }
  } catch (error) {
    console.log('sign up', error)
    return true
  }
}
