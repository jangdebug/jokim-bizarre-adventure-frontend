import { getEventCategoryItemDatas, getEventDetailTabDatas } from '@/actions/event/getEventDetail'
import EventDetailCategory from '@/components/event/detail/EventDetailCategory'
import { eventCategoryItemType, eventDetailTab } from '@/types/EventTypes'

export default async function page({ params }: { params: { id: number } }) {
  try {
    const eventDetailTabDatas: eventDetailTab[] = await getEventDetailTabDatas(params.id)

    if (eventDetailTabDatas.length > 0) {
      const eventCategoryItemDatas: eventCategoryItemType[] = await getEventCategoryItemDatas(eventDetailTabDatas[0])

      return (
        <EventDetailCategory
          eventDetailTabDatas={eventDetailTabDatas}
          eventCategoryItemDatas={eventCategoryItemDatas}
        />
      )
    }

    return <div>데이터가 없습니다.</div>
  } catch (error) {
    console.error('Error fetching data:', error)
    return <div>데이터를 불러오는데 문제가 발생했습니다.</div>
  }
}
