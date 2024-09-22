export interface orderDeliveryType {
  addressCode: string
  addressName: string
  recipient: string
  addressRoad: string
  addressDetail: string
  dispCellNo: string
  phone: string
}

export interface orderMessageType {
  id: number
  content: string
}

export interface orderCustomerType {
  name: string
  email: string
  phone: string
}

export interface orderPhoneType {
  id: number
  dispCellNo: string
}
