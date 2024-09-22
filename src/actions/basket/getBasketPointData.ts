import { basketPointDatas } from '@/datas/dummy/basket/PointData'
import { basketPointType } from '@/types/BasketTypes'

export async function getBasketPointAction(): Promise<basketPointType[]> {
  const res: basketPointType[] = basketPointDatas
  // const res = await fetch(`/basket/point`)
  // if(!res.ok){
  //   throw new Error('Fail to fetch')
  // }
  // const data = (await res.json()) as commonResType;
  //return data.data as basketPointType[];

  return res
}
