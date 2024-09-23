import { signIn } from 'next-auth/react'

export const postNewUser = async (convertedForm: signupDataType) => {
  'use server'

  try {
    const res = await fetch(`${process.env.API_BASE_URL}/v1/auth/sign-up/simple`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(convertedForm),
    })
    // console.log('body', JSON.stringify(convertedForm))

    // console.log('signup res', res)

    if (res.ok) {
      console.log('회원가입이 완료되었습니다. 바로 로그인 수행합니다.')
      // signIn('credentials', {
      //   email: convertedForm.email as string,
      //   password: convertedForm.password as string,
      //   redirect: true,
      //   callbackUrl: '/',
      // })

      return true
    } else {
      console.log('회원가입에 실패했습니다.', res)
      return false
    }
  } catch (error) {
    console.log(error)
    return false
  }
}
