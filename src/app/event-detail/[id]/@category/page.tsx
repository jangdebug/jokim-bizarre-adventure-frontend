import { getEventDetailTabDatas } from '@/actions/event/getEventDetail'
import EventDetailCategory from '@/components/event/detail/EventDetailCategory'
import { eventDetailTab } from '@/types/EventTypes'

export default async function page({ params }: { params: { id: number } }) {
  const eventDetailTabDatas: eventDetailTab[] = await getEventDetailTabDatas()

  return <EventDetailCategory eventDetailTabDatas={eventDetailTabDatas} />
}
