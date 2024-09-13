import {
  eventCategoryItemDatas,
  eventDetailData,
  eventDetailTabDatas,
  eventRelationDatas,
} from '@/datas/dummy/event/DetailData'
import { eventCategoryItemType, eventDetailTab, eventDetailType, eventRelationType } from '@/types/EventTypes'

function getCurrentTimeWithMilliseconds(): string {
  const now = new Date()
  const hours = now.getHours().toString().padStart(2, '0')
  const minutes = now.getMinutes().toString().padStart(2, '0')
  const seconds = now.getSeconds().toString().padStart(2, '0')
  const milliseconds = now.getMilliseconds().toString().padStart(3, '0')

  return `${hours}:${minutes}:${seconds}.${milliseconds}`
}

export async function getEventDetailData(id: number): Promise<eventDetailType> {
  const res = eventDetailData as eventDetailType

  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     console.log('Top:', getCurrentTimeWithMilliseconds())
  //     resolve(res)
  //   }, 2000)
  // })

  return res
  // const res = await fetch(`/api/v1/event-detail/${id}`);

  // if (!res.ok) {
  //   throw new Error('Failed to fetch event details');
  // }

  // const data: eventDetailType = await res.json();
  // return data;
}

//카테고리를 BE로 category = [1, 3, 10], offset=8 이런식으로 보내면
//이것을 3개의 카테고리에 각각 8개의 데이터씩
// const queryString = data.map(item => `id=${item}`).join('&');
// const response = await fetch(`https://api.example.com/endpoint?${queryString}`, {
//   method: 'GET', // GET 요청
// });
export async function getEventRelationDatas(id: number) {
  const res = eventRelationDatas as eventRelationType[]

  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     console.log('Middle:', getCurrentTimeWithMilliseconds())
  //     resolve(res)
  //   }, 2000)
  // })
  return res
}

//이벤트 세부사항의 탭 카테고리는 1:M으로 이벤트 탭 카테고리 관리 테이블을 추가해주어야 할 듯.
export async function getEventDetailTabDatas() {
  const res = eventDetailTabDatas as eventDetailTab[]

  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     console.log('Bottom:', getCurrentTimeWithMilliseconds())
  //     resolve(res)
  //   }, 2000)
  // })
  return res
}

export async function getEventCategoryItemDatas(categoryId: number): Promise<eventCategoryItemType[]> {
  const res = eventCategoryItemDatas as eventCategoryItemType[]

  console.log('categoryId --> ', categoryId)

  return res
}
