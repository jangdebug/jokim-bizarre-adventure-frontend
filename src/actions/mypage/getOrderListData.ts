import { orderListDatas } from '@/datas/dummy/mypage/MyOrderDatas'
import { orderListType } from '@/types/MyPageTypes'

export async function getOrderListAction(): Promise<orderListType[]> {
  'use server'
  const res: orderListType[] = orderListDatas
  //   , {
  //     next: { tags: ['orderList'] }
  //   }
  return res
}
