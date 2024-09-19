import { myDeliveryDatas, phoneDatas } from '@/datas/dummy/mypage/MyDeliveryDatas'
import { addDeliveryType, deliveryType, phoneType } from '@/types/MyPageTypes'

///////////////////// 내 배송지 정보들 /////////////////////
export async function getMyDelivery(): Promise<deliveryType[]> {
  const res: deliveryType[] = myDeliveryDatas
  // const res = await fetch(),{
  // revalidateTag('deliveryAddress');
  // }
  // if(!res.ok){
  //   throw new Error('Fail to fetch')
  // }
  // const data = (await res.json()) as commonResType;
  //return data.data as deliveryType[];
  return res
}

///////////////////// 기본 배송지 설정 /////////////////////
export const updateDefaultDelivery = async (formData: FormData) => {
  try {
    // const response = await fetch('/api/v1/mypage/delivery/set-default-address', {
    //   method: 'PUT',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ defaultDeliveryId: newDefaultId }),
    // })

    // if (!response.ok) {
    //   throw new Error('Failed to update default delivery')
    // }

    // const result = await response.json()
    // return result

    return true
  } catch (error) {
    throw error
  }
}

///////////////////// 배송지 추가 /////////////////////
export async function addDeliveryAction(deliveryFormData: FormData) {
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
  console.log('action payload', payload)
  // const res = await fetch(`${process.env.API_BASE_URL}/api/v1/mypage/add-delivery-info`, {
  //   method: 'POST',
  //   body: JSON.stringify(payload),
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  // })

  // console.log(res)
  // if (res.ok) {
  //   return await res.json()
  // }
  return payload
}
