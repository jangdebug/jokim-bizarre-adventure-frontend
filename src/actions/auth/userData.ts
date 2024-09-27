'use server'

export const postNewUser = async (convertedForm: signupDataType) => {
  'use server'
  console.log('user signup action', convertedForm)

  // try {
  const res = await fetch(`${process.env.API_BASE_URL}/v1/auth/sign-up/simple`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(convertedForm),
  })

  const data = await res.json()
  console.log('in server', data)

  return data as commonResType<undefined>
}
