import { eventListType } from '@/types/ListDataTypes'
import EventListContents from './EventListContents'
import EventListTitle from './EventListTitle'

interface eventListProps {
  eventListResData: eventListType[]
}

export default async function EventList({ eventListResData }: eventListProps) {
  return (
    <>
      <EventListTitle />
      <EventListContents eventListDatas={eventListResData} />
    </>
  )
}
