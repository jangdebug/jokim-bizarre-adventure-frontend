import { getEventRelationDatas } from '@/actions/event/getEventDetail'
import EventDetailRelation from '@/components/event/detail/EventDetailRelation'
import { eventRelationType } from '@/types/EventTypes'

export default async function page({ params }: { params: { id: number } }) {
  const eventRelationDatas: eventRelationType[] = await getEventRelationDatas(params.id)

  return <EventDetailRelation eventRelationDatas={eventRelationDatas} />
}
