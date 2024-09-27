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

  const isLike = likeData.get('currentState') === 'true'
  const type = likeData.get('type')
  const targetId = likeData.get('targetId')
  const targetType = String(type + 'Code')

  const reqData: { [key: string]: any } = {}
  reqData[targetType] = targetId

  if (isLike) {
    const res = await fetch(`${process.env.API_BASE_URL}/v1/wishlist/${type}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${(await auth).accessToken}`,
      },
      body: JSON.stringify(reqData),
    })
    const data = await res.json()
    console.log('data', data)

    if (!res.ok) {
      console.error(`Error: ${res.statusText}`)
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
