import { myDefaultDeliveryData, myDeliveryDatas, phoneDatas } from '@/datas/dummy/mypage/MyDeliveryDatas'
import { defaultDeliveryType, deliveryType, phoneType } from '@/types/MyPageTypes'

export interface DeliveryResponse {
  defaultDelivery: defaultDeliveryType
  deliveryList: deliveryType[]
}

///////////////////// 내 배송지 정보들 /////////////////////
export async function getMyDelivery(): Promise<DeliveryResponse> {
  const res: DeliveryResponse = {
    defaultDelivery: myDefaultDeliveryData,
    deliveryList: myDeliveryDatas,
  }
  // const res = await fetch()
  // if(!res.ok){
  //   throw new Error('Fail to fetch')
  // }
  // const data = (await res.json()) as commonResType;
  //return data.data as deliveryType[];
  return res
}

///////////////////// 기본 배송지 설정 /////////////////////
//  @RequestBody Map<String, String> body) {
//    String defaultDeliveryId = body.get("defaultDeliveryId");
export const updateDefaultDelivery = async (newDefaultId: string) => {
  try {
    // const response = await fetch('/api/v1/mypage/delivery/set-default-address', {
    //   method: 'PATCH',
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
//  ?defaultDeliveryId={newDefaultId} => @RequestParam("defaultDeliveryId") String defaultDeliveryId) => GET
//  /newDefaultId => @PathVariable String defaultDeliveryId => GET
// export const updateDefaultDelivery = async (newDefaultId: string) => {
//   try {
//     const response = await fetch(`/api/set-default-address?defaultDeliveryId={newDefaultId}`, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     })

//     if (!response.ok) {
//       throw new Error('Failed to update default delivery')
//     }

//     const result = await response.json()
//     return result
//   } catch (error) {
//     throw error
//   }
// }

///////////////////// 배송지 추가 휴대폰 번호 /////////////////////
export async function getDeliveryPhoneDatas() {
  const res = phoneDatas as phoneType[]
  return res
}
