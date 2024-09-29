import { AbleReviewType, reviewCountType, writenReviewType } from '@/types/MyPageTypes'

export const myReviewCountData: reviewCountType = {
  productCount: 20,
  ableCount: 7,
  alreadyCount: 13,
}

export const myAbleReviewDatas: AbleReviewType[] = [
  {
    productId: 1,
    brandName: 'PHILIPP PLEIN',
    productName: '스컬 퍼 후드 다운 패딩 자켓',
    imageUrl: 'https://image.sivillage.com/upload/C00001/s3/goods/org/175/240910031117175.jpg?RS=750&SP=1',
    orderDate: '2024-09-09',
  },
  {
    productId: 2,
    brandName: 'GIORGIO ARMANI',
    productName: '남성 캐시미어 프론트 구스다운 자켓',
    imageUrl: 'https://image.sivillage.com/upload/C00001/goods/org/240/230814005977240.jpg?RS=350&SP=1',
    orderDate: '2024-09-09',
  },
]

export const myWritenReviewDatas: writenReviewType[] = [
  {
    productId: 1,
    brandName: 'RICK OWENS',
    productName: '[MEN] [MONCLER] 구스다운 집업 플라이트 자켓',
    imageUrl: 'https://image.sivillage.com/upload/C00001/s3/goods/org/612/231129007231612.jpg?RS=750&SP=1',
    review: '도톰하고 예뻐요 ㅎㅎ 잘 산 것 같아요~!!ㅎㅎ',
    registDate: '2024-09-09',
  },
  {
    productId: 2,
    productName: 'HERNO',
    brandName: '남성 집업 비브 다운 패딩 코트',
    imageUrl: 'https://image.sivillage.com/upload/C00001/goods/org/919/231018006626919.jpg?RS=350&SP=1',
    review: '편하고 좋아서 선물해줬어요 너무 좋아해요 ㅋㅋ',
    registDate: '2024-09-09',
  },
]
