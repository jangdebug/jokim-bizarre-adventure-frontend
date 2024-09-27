import { options } from '@/app/api/auth/[...nextauth]/options'
import { useSession } from '@/app/context/SessionContext'
import { brandListType, checkWishByBrandType } from '@/types/BrandTypes'
import { getServerSession } from 'next-auth'

async function getSessionAuth() {
  const session = await getServerSession(options)
  const isAuth = session?.user ? session.user : null

  if (!isAuth) {
    throw new Error('Unauthorized: No valid session found.')
  }

  return isAuth
}

export async function getBrandListAction(): Promise<brandListType[]> {
  const res = await fetch(`${process.env.API_BASE_URL}/v1/brand`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!res.ok) {
    console.log('Failed to fetch brand list')
    return []
  } else {
    return (await res.json()).result as brandListType[]
  }
}

export async function checkWishByBrandAction(): Promise<checkWishByBrandType[]> {
  const isAuth = await getSessionAuth()

  const res = await fetch(`${process.env.API_BASE_URL}/v1/wishlist/brand`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isAuth.accessToken}`,
    },
  })

  if (!res.ok) {
    console.log('Failed to fetch check wish by brand')
    return []
  } else {
    return (await res.json()).result as checkWishByBrandType[]
  }
}
