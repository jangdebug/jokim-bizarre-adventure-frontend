import { options } from '@/app/api/auth/[...nextauth]/options'
import { brandListType, checkWishByBrandType, favoiteBrandInfoType } from '@/types/BrandTypes'
import { getServerSession } from 'next-auth'

async function getSessionAuth() {
  const session = await getServerSession(options)
  const isAuth = session?.user ? session.user : null

  if (!isAuth) {
    console.log('Unauthorized: No valid session found.')
    return false
  }

  return isAuth
}

export async function getBrandListAction(): Promise<brandListType[]> {
  const res = await fetch(`${process.env.API_BASE_URL}/v1/brand`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    next: { tags: ['brand-ChangeLike'] },
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
  if (!isAuth) return []

  const res = await fetch(`${process.env.API_BASE_URL}/v1/wishlist/brand`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isAuth.accessToken}`,
    },
    next: { tags: ['brand-ChangeLike'] },
  })

  if (!res.ok) {
    console.log('Failed to fetch check wish by brand')
    return []
  } else {
    return (await res.json()).result as checkWishByBrandType[]
  }
}

export async function getFavoriteItemInfo(brandCode: string): Promise<favoiteBrandInfoType | undefined> {
  const isAuth = await getSessionAuth()
  if (!isAuth) return

  const res = await fetch(`${process.env.API_BASE_URL}/v1/brand/${brandCode}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isAuth.accessToken}`,
    },
  })

  if (!res.ok) {
    console.log('Failed to fetch Wish Brand Item Info')
    return
  } else {
    return (await res.json()).result as favoiteBrandInfoType
  }
}
