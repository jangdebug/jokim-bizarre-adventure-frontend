import { eventListDatas } from '@/datas/dummy/event/ListDatas'
import { eventListType } from '@/types/ListDataTypes'

export async function getEventListData() {
  const res = eventListDatas as eventListType[]
  return res
}
