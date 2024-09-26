import { getEventDetailData } from '@/actions/event/getEventDetail'
import EventDetailMain from '@/components/event/detail/EventDetailMain'
import { eventDetailType } from '@/types/EventTypes'
import { Suspense } from 'react'

export default async function EventDetail({ params }: { params: { id: number } }) {
  const eventDetailData: eventDetailType = await getEventDetailData(params.id)

  return (
    <Suspense fallback={<div>skeleton</div>}>
      <EventDetailMain eventDetailData={eventDetailData} />
    </Suspense>
  )
}
