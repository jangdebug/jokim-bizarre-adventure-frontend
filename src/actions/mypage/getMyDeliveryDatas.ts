import { options } from '@/app/api/auth/[...nextauth]/options'
import { addDeliveryType, deliveryType, modDeliveryType } from '@/types/MyPageTypes'
import { getServerSession } from 'next-auth'
import { revalidateTag } from 'next/cache'

async function getSessionAuth() {
  const session = await getServerSession(options)
  const isAuth = session?.user ? session.user : null

  if (!isAuth) {
    console.log('Unauthorized: No valid session found.')
    return null
  }

  return isAuth
}

///////////////////// 내 배송지 정보들 /////////////////////
export async function getMyDelivery(token: string | undefined): Promise<deliveryType[]> {
  //const res: deliveryType[] = myDeliveryDatas

  const res = await fetch(`${process.env.API_BASE_URL}/v1/mypage/delivery-info`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    next: { tags: ['addAddress'] },
    cache: 'no-cache',
  })

  const data = (await res.json()).result as deliveryType[]

  return data
}

///////////////////// 수정할 배송지 정보 /////////////////////
export async function getModifyDeliveryData(addressCode: string): Promise<deliveryType> {
  const isAuth = await getSessionAuth()

  const res = await fetch(`${process.env.API_BASE_URL}/v1/mypage/delivery-info/${addressCode}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isAuth?.accessToken}`,
    },
    cache: 'no-cache',
  })

  const data = (await res.json()).result as deliveryType

  return data
}

///////////////////// 기본 배송지 설정 /////////////////////
export const updateDefaultDelivery = async (formData: FormData) => {
  let accessToken = formData.get('token') as string
  let addressCode = formData.get('deliveryAddress') as string

  const res = await fetch(`${process.env.API_BASE_URL}/v1/mypage/delivery/default-address/${addressCode}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  })
  if (res.ok) {
    return true
  } else {
    return false
  }
}

///////////////////// 배송지 추가 /////////////////////
export async function addDeliveryAction(deliveryFormData: FormData) {
  const isAuth = await getSessionAuth()

  const payload: addDeliveryType = {
    addressName: deliveryFormData.get('addressName') as string,
    recipient: deliveryFormData.get('recipient') as string,
    dispCellNo: deliveryFormData.get('dispCellNo') as string,
    phone: deliveryFormData.get('phone') as string,
    zipCode: deliveryFormData.get('zipCode') as string,
    addressRoad: deliveryFormData.get('addressRoad') as string,
    addressJibeon: deliveryFormData.get('addressJibeon') as string,
    addressDetail: deliveryFormData.get('addressDetail') as string,
    isDefault: deliveryFormData.get('isDefault') === 'on',
    deliveryPolicy: deliveryFormData.get('deliveryPolicy') === 'on',
  }

  const res = await fetch(`${process.env.API_BASE_URL}/v1/mypage/delivery-info`, {
    method: 'POST',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isAuth?.accessToken}`,
    },
  })

  if (res.ok) {
    revalidateTag('addAddress')
    return true
  } else return false
}

///////////////////// 배송지 수정 /////////////////////
export async function modifyDeliveryAction(deliveryFormData: FormData) {
  const isAuth = await getSessionAuth()

  const payload: modDeliveryType = {
    addressCode: deliveryFormData.get('addressCode') as string,
    addressName: deliveryFormData.get('addressName') as string,
    recipient: deliveryFormData.get('recipient') as string,
    dispCellNo: deliveryFormData.get('dispCellNo') as string,
    phone: deliveryFormData.get('phone') as string,
    zipCode: deliveryFormData.get('zipCode') as string,
    addressRoad: deliveryFormData.get('addressRoad') as string,
    addressJibeon: deliveryFormData.get('addressJibeon') as string,
    addressDetail: deliveryFormData.get('addressDetail') as string,
    isDefault: deliveryFormData.get('isDefault') === 'on',
    deliveryPolicy: deliveryFormData.get('deliveryPolicy') === 'on',
  }

  const res = await fetch(`${process.env.API_BASE_URL}/v1/mypage/delivery-info`, {
    method: 'PUT',
    body: JSON.stringify(payload),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${isAuth?.accessToken}`,
    },
  })

  if (res.ok) {
    revalidateTag('addAddress')
    return true
  } else return false
}

///////////////////// 배송지 삭제 /////////////////////
export const deleteDelivery = async (addressCode: string, token: string | undefined) => {
  const res = await fetch(`${process.env.API_BASE_URL}/v1/mypage/delivery-info/${addressCode}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  })

  if (res.ok) {
    return true
  } else return false
}
