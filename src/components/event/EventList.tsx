import React from 'react'
import EventListTitle from './EventListTitle'
import EventListContents from './EventListContents'
import { getEventListData } from '@/actions/event/getEventListData'

export default async function EventList() {
  const eventListResData = await getEventListData()

  return (
    <>
      <EventListTitle />
      <EventListContents eventListDatas={eventListResData} />
    </>
  )
}
