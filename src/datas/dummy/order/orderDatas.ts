import { orderCustomerType, orderDeliveryType, orderMessageType, orderPhoneType } from '@/types/OrderTypes'

export const orderDeliveryData: orderDeliveryType = {
  addressCode: '111',
  addressName: 'baesongji',
  recipient: 'who',
  addressRoad: '강원 속초시 교동로 44-5',
  addressDetail: '3',
  dispCellNo: '010',
  phone: '1234-1234',
}

export const orderMessageDatas: orderMessageType[] = [
  {
    id: 1,
    content: '배송 전에 미리 연락 바랍니다.',
  },
  {
    id: 2,
    content: '부재 시 경비실에 맡겨 주세요.',
  },
  {
    id: 3,
    content: '부재 시 문 앞에 놓아주세요.',
  },
  {
    id: 4,
    content: '택배함에 넣어주세요.',
  },
]

export const orderCustomerData: orderCustomerType = {
  name: '테스터',
  email: 'test@gmail.com',
  phone: '010-1234-0123',
}

export const orderPhoneDatas: orderPhoneType[] = [
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
