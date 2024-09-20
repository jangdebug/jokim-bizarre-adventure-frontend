import { popularItems } from '@/datas/dummy/best/BestItemDatas'
import { BestItemType } from '@/types/BestTypes'

// export async function getBestItemAction(): Promise<BestItemType[]> {
//   const res: BestItemType[] = popularItems
//   // const res = await fetch(`/best/popular`)
//   // if(!res.ok){
//   //   throw new Error('Fail to fetch')
//   // }
//   // const data = (await res.json()) as commonResType;
//   //return data.data as deliveryType[];

//   return res
// }

export async function getBestItemCategoryAction(type: string): Promise<BestItemType[]> {
  if (type !== 'ALL') return []
  const res: BestItemType[] = popularItems
  // const res = await fetch(`/best/popular?type=${type}`)
  // if(!res.ok){
  //   throw new Error('Fail to fetch')
  // }
  // const data = (await res.json()) as commonResType;
  //return data.data as deliveryType[];

  return res
}
