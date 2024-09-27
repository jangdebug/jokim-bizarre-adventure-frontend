'use server'

import { options } from '@/app/api/auth/[...nextauth]/options'
import { bottomSizeDatas, footSizeDatas, topSizeDatas } from '@/datas/dummy/mypage/MyRegisterData'
import { mySizeRegisterType, mySizeType, selectSizeType } from '@/types/MyPageTypes'
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

export async function getMySize(): Promise<mySizeType> {
  'use server'
  //const res = mySizeData as mySizeType
  const isAuth = await getSessionAuth()

  const res = await fetch(`${process.env.API_BASE_URL}/v1/mypage/size`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isAuth.accessToken}`,
    },
    next: { tags: ['updateSize'] },
  })

  const data = (await res.json()).result as mySizeType

  return data
}

export async function getSelectTopSize() {
  const res = topSizeDatas as selectSizeType[]
  return res
}

export async function getSelectBottomSize() {
  const res = bottomSizeDatas as selectSizeType[]
  return res
}

export async function getSelectFootSize() {
  const res = footSizeDatas as selectSizeType[]
  return res
}

export async function sizeRegistAction(sizeFormData: FormData) {
  const isAuth = await getSessionAuth()

  const payload: mySizeRegisterType = {
    height: Number(sizeFormData.get('height')) as number,
    weight: Number(sizeFormData.get('weight')) as number,
    topSize: sizeFormData.get('topSize') as string,
    bottomSize: sizeFormData.get('bottomSize') as string,
    footSize: sizeFormData.get('footSize') as string,
    agreement: sizeFormData.get('agreement') === 'on',
  }

  // console.log('action payload', payload)

  const res = await fetch(`${process.env.API_BASE_URL}/v1/mypage/size`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isAuth.accessToken}`,
    },
  })

  if (res.ok) {
    revalidateTag('updateSize')
    return true
  }
  return false
}
