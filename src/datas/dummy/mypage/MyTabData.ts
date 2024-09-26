import { myTabType } from '@/types/MyPageTypes'

//My Wish Tab Datas
export const myWishTabDatas: myTabType[] = [
  {
    id: 1,
    name: '상품',
    link: '/mypage/searchwish',
  },
  {
    id: 2,
    name: '컨텐츠',
    link: '/mypage/searchwish/events',
  },
]

//My Beauty & Size Tab Datas
export const myBeautySizeTabDatas: myTabType[] = [
  {
    id: 1,
    name: '나의 사이즈',
    link: '/mypage/beautysize',
  },
  {
    id: 2,
    name: '나의 뷰티정보',
    link: '/mypage/beautysize/beauty',
  },
]

//My Review Tab Datas
export const myReviewTabDatas: myTabType[] = [
  {
    id: 1,
    name: '상품리뷰 작성',
    link: '/mypage/review',
  },
  {
    id: 2,
    name: '작성한 상품리뷰',
    link: '/mypage/review/products',
  },
]

//My Delivery Tab Datas
export const myDeliveryTabDatas: myTabType[] = [
  {
    id: 1,
    name: '배송지 관리',
    link: '/mypage/delivery-info',
  },
  {
    id: 2,
    name: '환불계좌 관리',
    link: '/mypage/delivery-info/account',
  },
]
