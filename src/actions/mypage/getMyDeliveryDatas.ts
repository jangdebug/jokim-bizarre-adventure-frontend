import { myDeliveryDatas, phoneDatas } from '@/datas/dummy/mypage/MyDeliveryDatas'
import { deliveryType, phoneType } from '@/types/MyPageTypes'

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
  console.log('formData --> ', formData)
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

///////////////////// 배송지 추가 휴대폰 번호 /////////////////////
export async function getDeliveryPhoneDatas() {
  const res = phoneDatas as phoneType[]
  return res
}
