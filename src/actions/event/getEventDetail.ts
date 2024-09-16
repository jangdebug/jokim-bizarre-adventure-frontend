import {
  eventCategoryItemDatas,
  eventDetailData,
  eventDetailTabDatas,
  eventRelationDatas,
} from '@/datas/dummy/event/DetailData'
import { eventCategoryItemType, eventDetailTab, eventDetailType, eventRelationType } from '@/types/EventTypes'

export async function getEventDetailData(id: number): Promise<eventDetailType> {
  const res = eventDetailData as eventDetailType

  return res
  // const res = await fetch(`/api/v1/event-detail/${id}`);

  // if (!res.ok) {
  //   throw new Error('Failed to fetch event details');
  // }

  // const data: eventDetailType = await res.json();
  // return data;
}

//이벤트에 적용되는 대표 상품
//카테고리를 BE로 category = [1, 3, 10], offset=8 이런식으로 보내면
//이것을 3개의 카테고리에 각각 8개의 데이터씩
// const queryString = data.map(item => `id=${item}`).join('&');
// const response = await fetch(`https://api.example.com/endpoint?${queryString}`, {
//   method: 'GET', // GET 요청
// });
export async function getEventRelationDatas(id: number) {
  const res = eventRelationDatas as eventRelationType[]

  return res
}

//이벤트 세부사항의 탭 카테고리는 1:M으로 이벤트 탭 카테고리 관리 테이블을 추가해주어야 할 듯.
export async function getEventDetailTabDatas(categoryId: number): Promise<eventDetailTab[]> {
  const res = eventDetailTabDatas as eventDetailTab[]

  return res
}

export async function getEventCategoryItemDatas(category: eventDetailTab): Promise<eventCategoryItemType[]> {
  const res = eventCategoryItemDatas as eventCategoryItemType[]

  console.log(category)
  //const res = await fetch(`----/category.id`)

  return res
}
