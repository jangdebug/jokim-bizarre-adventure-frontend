import { getEventListData } from '@/actions/event/getEventListData'
import { getEventTabBadgeData } from '@/actions/event/getEventTabBadgeData'
import EventList from '@/components/event/EventList'
import EventTab from '@/components/event/EventTab'

export default async function Event() {
  const eventTabBadgeResData = await getEventTabBadgeData()
  const eventListResData = await getEventListData()

  const initialCheckedId = 1

  return (
    <section>
      <EventTab eventTabBageListDatas={eventTabBadgeResData} initialCheckedId={initialCheckedId} />

      {/* EventTab에 따라 상품이 바뀌는 부분 */}
      <EventList eventListResData={eventListResData} />
    </section>
  )
}
