import { getEventTabBadgeData } from '@/actions/event/getEventTabBadgeData'
import EventTab from '@/components/event/EventTab'
import { eventTabBadgeType } from '@/types/InitialDataTypes'

export default async function Event() {
  const eventTabBadgeResData: eventTabBadgeType[] = await getEventTabBadgeData()

  return (
    <section>
      <EventTab eventTabBageListDatas={eventTabBadgeResData} />

      {/* EventTab에 따라 상품이 바뀌는 부분 */}
    </section>
  )
}
