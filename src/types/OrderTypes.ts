export interface orderDeliveryType {
  addressCode: string
  addressName: string
  dispCellNo: string
  recipient: string
  phone: string
  zipCode: string
  addressRoad: string
  addressJibeon: string
  addressDetail: string
  isDefault: boolean
  deliveryPolicy: boolean
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
