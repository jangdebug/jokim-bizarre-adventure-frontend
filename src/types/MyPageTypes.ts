import { StringDecoder } from 'string_decoder'

///////////////////////// TAB /////////////////////////
//MyPage WishTap Type
export interface myTabType {
  id: number
  name: string
  link: string
}

///////////////////////// MyPage Main /////////////////////////
//MyPage Info Type
export interface myInfoType {
  myGradeUrl: string
  myGradeName: string
  myName: string
  myCouponCount: number
  myReviewCount: number
}

//MyPage LookUp Type
export interface myLookUpType {
  order: number
  productPrepare: number
  deliveryPrepare: number
  delivering: number
  deliveryComplete: number
}

///////////////////////// MyPage Wish /////////////////////////
//MyPage WishProduct Type
export interface myWishProductType {
  id: number
  wishImageUrl: string
  wishBrand: string
  wishName: string
  wishAmmount: number
  wishPrice: number
}

//MyPage WishEvent Type
export interface myWishEventType {
  id: number
  wishImageUrl: string
  wishSubTitle: string
  wishTitle: string
  wishDescription: string
  wishStartDate: string
  wishEndDate: string
}

///////////////////////// Register /////////////////////////
//MyPage Register Type
export interface myRegisterType {
  id: number
  registerName: string
  modifyName?: string | undefined
  currentLink: string
}

///////////////////////// BeautySize /////////////////////////
//MyPage Size Type
export interface mySizeType {
  height?: number | undefined
  weight?: number | undefined
  topSize?: string | undefined
  bottomSize?: string | undefined
  footSize?: string | undefined
  agreement: boolean
}

//MyPage Size Register Type - All Datas Exists
export interface mySizeRegisterType {
  height: number
  weight: number
  topSize: string
  bottomSize: string
  footSize: string
  agreement: boolean
}

//MyPage Top, Bottom, Foot Size Data Type
export interface selectSizeType {
  id: number
  option: string
}

///////////////////////// Review /////////////////////////
//MyPage Review Count Type
export interface reviewCountType {
  productCount: number
  ableCount: number
  alreadyCount: number
}

//MyPage AbleReview Type
export interface AbleReviewType {
  productId: number
  brandName: string
  productName: string
  imageUrl: string
  orderDate: string
}

//MyPage WritenReview Type
export interface writenReviewType {
  productId: number
  brandName: string
  productName: string
  imageUrl: string
  review: string
  registDate: string
}

///////////////////////// Delivery /////////////////////////
export interface deliveryType {
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

export interface phoneType {
  id: number
  dispCellNo: string
}

export interface addDeliveryType {
  addressName: string
  recipient: string
  dispCellNo: string
  phone: string
  zipCode: string
  addressRoad: string
  addressJibeon: string
  addressDetail: string
  isDefault: boolean
  deliveryPolicy: boolean
}

///////////////////////// Order /////////////////////////
export interface orderStepType {
  id: number
  StepImage: React.FC
  StepName: string
}

export interface orderPolicyType {
  id: number
  step: string
  title: string
  contents: string[]
  sub: string[]
}

export interface orderListType {
  id: number
  productId: number
  productImageUrl: String
  brandName: String
  productName: String
  productOption: String
  quantity: number
  amount: number
  address: String
  couponCode?: String | null
  deliveryState: String
  purchaseDate: String
}

///////////////////////// newPassword /////////////////////////
export interface newPasswordType {
  password: string
}
