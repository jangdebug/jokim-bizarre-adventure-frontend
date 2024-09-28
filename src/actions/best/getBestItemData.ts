import { bestBrandType, bestImageType, BestItemType } from '@/types/BestTypes'

export async function getBestItemAction(type: string): Promise<BestItemType[]> {
  if (type !== 'ALL') return []
  // const res: BestItemType[] = popularItems
  const res = await fetch(`${process.env.API_BASE_URL}/v1/best/popular-product`)
  if (!res.ok) {
    console.log('Fail to fetch best/popular-product')
    return []
  }
  const data = (await res.json()).result as BestItemType[]

  return data
}

// export async function getBestItemCategoryAction(type: string): Promise<BestItemType[]> {
//   if (type !== 'ALL') return []
//   // const res: BestItemType[] = popularItems
//   const res = await fetch(`${process.env.API_BASE_URL}/v1/best/popular-product`)
//   if (!res.ok) {
//     console.log('Fail to fetch best/popular-product')
//     return []
//   }
//   const data = (await res.json()).result as BestItemType[]

//   return data
// }

export async function getPopularCardImageUrl(productCode: string): Promise<bestImageType> {
  const res = await fetch(`${process.env.API_BASE_URL}/v1/product-media/thumbnail/${productCode}`)
  if (!res.ok) {
    console.log('Fail to fetch best/productImg Url')
    return { mediaCode: 'null', mediaUrl: 'null', mediaType: 'null' }
  }
  const data = (await res.json()).result as bestImageType

  return data
}

export async function getBrandNameByCode(brandCode: string): Promise<bestBrandType> {
  const res = await fetch(`${process.env.API_BASE_URL}/v1/brand/${brandCode}`)
  if (!res.ok) {
    console.log('Fail to fetch best/brandCode')
    return { englishName: 'null', koreanName: 'null', logoMediaUrl: 'null' }
  }
  const data = (await res.json()).result as bestBrandType

  return data
}
