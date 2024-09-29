import { orderCustomerType, orderDeliveryType, orderMessageType, orderPhoneType } from '@/types/OrderTypes'

export const orderDeliveryData: orderDeliveryType = {
  addressCode: '134712',
  addressName: '조김클럽',
  recipient: '조김님',
  addressRoad: '부산광역시 수영구 광안로45번길 8 (광안동, 광안비취빌리지)',
  addressDetail: '703호',
  dispCellNo: '010',
  phone: '7134-5135',
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
  name: '본인',
  email: 'jogim@gmail.com',
  phone: '010-7134-5135',
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
