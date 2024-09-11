import DeliveryBoxIcon from '@/components/icons/mypage/DeliveryBoxIcon'
import DeliveryCartIcon from '@/components/icons/mypage/DeliveryCartIcon'
import DeliveryCompleteIcon from '@/components/icons/mypage/DeliveryCompleteIcon'
import DeliveryDepositIcon from '@/components/icons/mypage/DeliveryDepositIcon'
import DeliveryPaymentIcon from '@/components/icons/mypage/DeliveryPaymentIcon'
import DeliveryTruckIcon from '@/components/icons/mypage/DeliveryTruckIcon'
import { orderListType, orderPolicyType, orderStepType } from '@/types/MyPageTypes'

export const orderStepDatas: orderStepType[] = [
  {
    id: 1,
    StepImage: DeliveryDepositIcon,
    StepName: '입금대기',
  },
  {
    id: 2,
    StepImage: DeliveryPaymentIcon,
    StepName: '결제완료',
  },
  {
    id: 3,
    StepImage: DeliveryBoxIcon,
    StepName: '상품준비중',
  },
  {
    id: 4,
    StepImage: DeliveryCartIcon,
    StepName: '배송준비중',
  },
  {
    id: 5,
    StepImage: DeliveryTruckIcon,
    StepName: '배송중',
  },
  {
    id: 6,
    StepImage: DeliveryCompleteIcon,
    StepName: '배송완료',
  },
]

export const orderPolicyDatas: orderPolicyType[] = [
  {
    id: 1,
    step: 'STEP 01.',
    title: '입금대기',
    contents: ['주문이 정상적으로 접수되었으니, 입금기한 내에 결제를 완료해 주세요.'],
    sub: ['배송지 변경 가능', '주문취소 가능'],
  },
  {
    id: 2,
    step: 'STEP 02.',
    title: '결제완료',
    contents: ['주문 접수 및 결제가 완료되었습니다.'],
    sub: ['배송지 변경 가능', '주문취소 가능'],
  },
  {
    id: 3,
    step: 'STEP 03.',
    title: '상품준비중',
    contents: ['주문상품을 확인하고 있습니다.', ' 배송 지연 및 품절이 발생할 수 있습니다.'],
    sub: ['배송지 변경 가능', '주문취소 가능'],
  },
  {
    id: 4,
    step: 'STEP 04.',
    title: '배송준비중',
    contents: ['상품의 배송을 준비하는 중입니다.', ' 배송 지연 및 품절이 발생할 수 있습니다.'],
    sub: ['고객센터를 통한 주문취소 문의 가능'],
  },
  {
    id: 5,
    step: 'STEP 05.',
    title: '배송중',
    contents: ['택배사로 상품이 전달되어 배송이 시작되었습니다.'],
    sub: ['교환신청 가능', '반품신청 가능'],
  },
  {
    id: 6,
    step: 'STEP 06.',
    title: '배송완료',
    contents: ['고객님께서 상품을 안전하게 받으셔서 배송이 완료된 상태입니다.'],
    sub: ['교환신청 가능', '반품신청 가능'],
  },
]

export const orderListDatas: orderListType[] = [
  {
    id: 1,
    productId: 1001,
    productImageUrl: 'https://image.sivillage.com/upload/C00001/s3/goods/org/466/240202008700466.jpg?RS=750&SP=1',
    brandName: 'SAMSUNG',
    productName: 'S24 플러스 256GB 자급제폰 앰버 옐로우 SM-S926N',
    productOption: 'yellow',
    quantity: 1,
    amount: 1207950,
    address: '부산',
    couponCode: '074523',
    deliveryState: 'PURCHASED',
    purchaseDate: '2024-09-11',
  },
  {
    id: 2,
    productId: 1002,
    productImageUrl: 'https://image.sivillage.com/upload/C00001/goods/org/303/221025003373303.jpg?RS=750&SP=1',
    brandName: 'AMT',
    productName: 'AMT 316Ti 통5중 샤프 파티웍 28cm',
    productOption: 'yellow',
    quantity: 1,
    amount: 209950,
    address: '서울',
    couponCode: null,
    deliveryState: 'PURCHASED',
    purchaseDate: '2024-09-11',
  },
]
