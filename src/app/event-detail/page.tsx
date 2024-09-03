import { getEventTabBadgeData } from '@/actions/event/getEventTabBadgeData'
import EventList from '@/components/event/EventList'
import EventTab from '@/components/event/EventTab'

export default async function Event() {
  const eventTabBadgeResData = await getEventTabBadgeData()

  const initialCheckedId = 1

  return (
    <section>
      <EventTab eventTabBageListDatas={eventTabBadgeResData} initialCheckedId={initialCheckedId} />

      {/* EventTab에 따라 상품이 바뀌는 부분 */}
      <EventList />
    </section>
  )
}
