import { deliveryType, phoneType } from '@/types/MyPageTypes'

export const myDeliveryDatas: deliveryType[] = [
  {
    addressCode: '1',
    addressName: '조김',
    recipient: '조김의 아지트',
    dispCellNo: '010',
    phone: '0000-0000',
    zipCode: '08806',
    addressRoad: '[도로명] 서울 관악구 남현1길 38-11',
    addressJibeon: '[지번] 서울 관악구',
    addressDetail: '123호',
    isDefault: true,
    deliveryPolicy: true,
  },
  {
    addressCode: '2',
    addressName: '테스터',
    recipient: '신세카이',
    dispCellNo: '010',
    phone: '1111-1111',
    zipCode: '48058',
    addressRoad: '[도로명] 부산 해운대구 센텀남대로 35',
    addressJibeon: '[지번] 부산 해운대구  35',
    addressDetail: '123호',
    isDefault: false,
    deliveryPolicy: true,
  },
  {
    addressCode: '3',
    addressName: '관리자',
    recipient: '롯데',
    dispCellNo: '010',
    phone: '2222-2222',
    zipCode: '48058',
    addressRoad: '[도로명] 부산 해운대구 센텀남대로 35',
    addressJibeon: '[지번] 부산 해운대구  35',
    addressDetail: '704호',
    isDefault: false,
    deliveryPolicy: true,
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
