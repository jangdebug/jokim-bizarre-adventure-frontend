import { AbleReviewType, reviewCountType, writenReviewType } from '@/types/MyPageTypes'

export const myReviewCountData: reviewCountType = {
  productCount: 20,
  ableCount: 7,
  alreadyCount: 13,
}

export const myAbleReviewDatas: AbleReviewType[] = [
  {
    productId: 1,
    brandName: 'JAJU',
    productName: '상품able1',
    imageUrl: 'https://image.sivillage.com/upload/C00001/s3/goods/org/882/240815027809882.jpg?RS=450&SP=1',
    orderDate: '2024-09-09',
  },
  {
    productId: 2,
    brandName: 'JAJU',
    productName: '상품able2',
    imageUrl: 'https://image.sivillage.com/upload/C00001/s3/goods/org/882/240815027809882.jpg?RS=450&SP=1',
    orderDate: '2024-09-09',
  },
]

export const myWritenReviewDatas: writenReviewType[] = [
  {
    productId: 1,
    brandName: 'JAJU',
    productName: '상품1',
    imageUrl: 'https://image.sivillage.com/upload/C00001/s3/goods/org/882/240815027809882.jpg?RS=450&SP=1',
    review: '너무 좋아요!',
    registDate: '2024-09-09',
  },
  {
    productId: 2,
    productName: '상품2',
    brandName: 'JAJU',
    imageUrl: 'https://image.sivillage.com/upload/C00001/s3/goods/org/882/240815027809882.jpg?RS=450&SP=1',
    review: '너무 싫어요!',
    registDate: '2024-09-09',
  },
]
