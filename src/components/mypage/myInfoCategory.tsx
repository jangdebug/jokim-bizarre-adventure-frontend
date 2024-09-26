import React from 'react'
import MyInfoCategoryArticle from './myInfoCategory/myInfoCategoryArticle'

export interface myCategoryProps {
  title: string
  item?: myCategoryItemProps[]
}

export interface myCategoryItemProps {
  content: string
  src: string
}

const myPageCategory: myCategoryProps[] = [
  {
    title: '나의 쇼핑정보',
    item: [
      {
        content: '주문/배송 조회',
        src: '/mypage/order',
      },
      {
        content: '오프라인 주문 조회',
        src: '/',
      },
      {
        content: '취소/반품/교환 조회',
        src: '/',
      },
      {
        content: '선물함',
        src: '/',
      },
    ],
  },
  {
    title: '나의 혜택정보',
    item: [
      {
        content: 'S.I.포인트',
        src: '/',
      },
      {
        content: 'e포인트',
        src: '/',
      },
      {
        content: '쿠폰 내역',
        src: '/',
      },
      {
        content: '디지털보증서',
        src: '/',
      },
    ],
  },
  {
    title: '나의 활동정보',
    item: [
      {
        content: '상품리뷰',
        src: '/mypage/review',
      },
      {
        content: '상품문의',
        src: '/',
      },
      {
        content: '1:1문의내역',
        src: '/',
      },
      {
        content: '이벤트 참여내역',
        src: '/',
      },
      {
        content: '친구추천',
        src: '/',
      },
    ],
  },
  {
    title: '나의 관심정보',
    item: [
      {
        content: '관심클럽 설정',
        src: '/',
      },
      {
        content: '찜',
        src: '/mypage/searchwish',
      },
      {
        content: '재입고 알림신청 내역',
        src: '/',
      },
    ],
  },
  {
    title: '나의 정보관리',
    item: [
      {
        content: '개인정보 수정',
        src: '/',
      },
      {
        content: '비밀번호 변경',
        src: '/mypage/modPassword',
      },
      {
        content: 'SNS 연결 관리',
        src: '/',
      },
      {
        content: '배송지/환불계좌 관리',
        src: '/mypage/delivery-info',
      },
      {
        content: '회원탈퇴',
        src: '/',
      },
      {
        content: '사이즈 / 뷰티정보 설정',
        src: '/mypage/beautysize',
      },
      {
        content: '로그인 정보 관리',
        src: '/',
      },
    ],
  },
  {
    title: '신세계인터내셔날 멤버십 안내',
  },
]

export default function MyInfoCategory() {
  return (
    <div className="w-full">
      {myPageCategory.map((category, index) => (
        <MyInfoCategoryArticle category={category} key={index} />
      ))}
    </div>
  )
}
