import { StringDecoder } from 'string_decoder'

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

//MyPage WishTap Type
export interface myTabType {
  id: number
  name: string
  link: string
}

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

//MyPage Register Type
export interface myRegisterType {
  id: number
  registerName: string
  currentLink: String
}

//MyPage Size Type
export interface mySizeType {
  id: number
  height?: number | undefined
  weight?: number | undefined
  topSize?: string | undefined
  bottomSize?: string | undefined
  footSize?: string | undefined
  agreement: boolean
}

//MyPage Top, Bottom, Foot Size Data Type
export interface selectSizeType {
  id: number
  option: string
}

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
