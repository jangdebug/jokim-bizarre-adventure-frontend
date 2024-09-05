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
