import { addDeliveryType, deliveryType } from '@/types/MyPageTypes'
import { revalidateTag } from 'next/cache'

///////////////////// 내 배송지 정보들 /////////////////////
export async function getMyDelivery(): Promise<deliveryType[]> {
  //const res: deliveryType[] = myDeliveryDatas
  const res = await fetch(`${process.env.API_BASE_URL}/v1/mypage/delivery-info`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
    next: { tags: ['addAddress'] },
    cache: 'no-cache',
  })

  const data = (await res.json()).result as deliveryType[]

  return data
}

///////////////////// 수정할 배송지 정보 /////////////////////
export async function getModifyDeliveryData(addressCode: string): Promise<deliveryType> {
  const res = await fetch(`${process.env.API_BASE_URL}/v1/mypage/delivery-info/${addressCode}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
    cache: 'no-cache',
  })

  const data = (await res.json()).result as deliveryType

  return data
}

///////////////////// 기본 배송지 설정 /////////////////////
export const updateDefaultDelivery = async (formData: FormData) => {
  let addressCode = formData.get('deliveryAddress') as string

  const res = await fetch(`${process.env.API_BASE_URL}/v1/mypage/delivery/default-address/${addressCode}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  })
  if (res.status === 200) {
    return true
  } else {
    return false
  }
}

///////////////////// 배송지 추가 /////////////////////
export async function addDeliveryAction(deliveryFormData: FormData) {
  console.log(`${process.env.ACCESS_TOKEN}`)

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
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  })

  if (res.status === 200) {
    revalidateTag('addAddress')
    return true
  } else return false
}

///////////////////// 배송지 변경 /////////////////////
export async function modifyDeliveryAction(deliveryFormData: FormData) {
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
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  })

  if (res.status === 200) {
    revalidateTag('addAddress')
    return true
  } else return false
}

///////////////////// 배송지 삭제 /////////////////////
export const deleteDelivery = async (addressCode: string) => {
  const res = await fetch(`${process.env.API_BASE_URL}/v1/mypage/delivery-info/${addressCode}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
  })

  if (res.status === 200) {
    return true
  } else return false
}
