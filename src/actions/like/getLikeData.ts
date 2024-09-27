'use server'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import { revalidateTag } from 'next/cache'

async function getSessionAuth() {
  const session = await getServerSession(options)
  const isAuth = session?.user ? session.user : null

  if (!isAuth) {
    throw new Error('Unauthorized: No valid session found.')
  }

  return isAuth
}

export async function changeLikeAction(likeData: FormData) {
  'use server'
  const auth = getSessionAuth()
  if (!auth) return

  let isLike = likeData.get('currentState') === 'true'
  let type = likeData.get('type')
  let targetId = likeData.get('targetId')

  if (isLike) {
    const res = await fetch(`${process.env.API_BASE_URL}/v1/wishlist/${type}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${(await auth).accessToken}`,
      },
      body: JSON.stringify({
        brandCode: targetId,
      }),
    })

    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`)
    }

    // const data = await res.json()
    // return data
  }

  if (!isLike) {
    const res = await fetch(`${process.env.API_BASE_URL}/v1/wishlist/${type}/${targetId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${(await auth).accessToken}`,
      },
    })

    // 추가적인 응답 처리
    if (!res.ok) {
      throw new Error(`Error: ${res.statusText}`)
    }
    // const data = await res.json()
    // return data
  }

  revalidateTag(`${type}-ChangeLike`)
  return null
}
