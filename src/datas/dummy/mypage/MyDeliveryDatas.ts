import { defaultDeliveryType, deliveryType, phoneType } from '@/types/MyPageTypes'

export const myDefaultDeliveryData: defaultDeliveryType = {
  id: 1,
  default: 1,
}

export const myDeliveryDatas: deliveryType[] = [
  {
    addressId: 1,
    addressName: '조김',
    recipient: '조김의 아지트',
    phone: '010-0000-0000',
    zipCode: '08806',
    address: '서울 관악구 남현1길 38-11',
    addressDetail: '123호',
  },
  {
    addressId: 2,
    addressName: '테스터',
    recipient: '신세카이',
    phone: '010-1111-1111',
    zipCode: '48058',
    address: '부산 해운대구 센텀남대로 35',
    addressDetail: '705호',
  },
  {
    addressId: 3,
    addressName: '관리자',
    recipient: '롯데',
    phone: '010-2222-2222',
    zipCode: '48058',
    address: '부산 해운대구 센텀남대로 35',
    addressDetail: '704호',
  },
]

export const phoneDatas: phoneType[] = [
  {
    id: 1,
    dispCellNo: '010',
  },
  {
    id: 2,
    dispCellNo: '011',
  },
  {
    id: 3,
    dispCellNo: '016',
  },
  {
    id: 4,
    dispCellNo: '017',
  },
  {
    id: 5,
    dispCellNo: '018',
  },
  {
    id: 6,
    dispCellNo: '019',
  },
]
