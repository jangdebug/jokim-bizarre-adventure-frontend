import { reviewCountType, writenReviewType } from '@/types/MyPageTypes'

export const myReviewCountData: reviewCountType = {
  id: 1,
  productCount: 20,
  ableCount: 7,
  alreadyCount: 13,
}

export const myWritenReviewDatas: writenReviewType[] = [
  {
    id: 1,
    productName: '상품1',
    imageUrl: 'https://image.sivillage.com/upload/C00001/s3/goods/org/882/240815027809882.jpg?RS=450&SP=1',
    review: '너무 좋아요!',
    writeDate: '2024-09-09',
  },
  {
    id: 2,
    productName: '상품2',
    imageUrl: 'https://image.sivillage.com/upload/C00001/s3/goods/org/882/240815027809882.jpg?RS=450&SP=1',
    review: '너무 싫어요!',
    writeDate: '2024-09-09',
  },
]
