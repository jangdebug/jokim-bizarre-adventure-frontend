import { eventTabDatas } from '@/datas/dummy/event/TabDatas'
import { eventTabBadgeType } from '@/types/InitialDataTypes'

export async function getEventTabBadgeData() {
  const res = eventTabDatas as eventTabBadgeType[]
  return res
}
