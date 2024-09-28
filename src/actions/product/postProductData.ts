'use server'

import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'

async function getSessionAuth() {
  'use server'
  const session = await getServerSession(options)
  const isAuth = session?.user ? session.user : null

  if (!isAuth) {
    console.log('Unauthorized: No valid session found.')
    return null
  }

  return isAuth
}

export async function postProduct(
  type: string,
  productCode: string,
  selectedOption: string | undefined,
  currentQuantity: string,
) {
  'use server'

  const isAuth = await getSessionAuth()

  const regData: { [key: string]: any } = {}
  regData['productCode'] = productCode
  if (selectedOption !== undefined) regData['productOptionCode'] = selectedOption
  regData['quantity'] = currentQuantity

  const res = await fetch(`${process.env.API_BASE_URL}/v1/basket`, {
    method: 'POST',
    body: JSON.stringify(regData),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isAuth?.accessToken}`,
    },
  })

  if (res.ok) {
    return true
  }
  return false
}
