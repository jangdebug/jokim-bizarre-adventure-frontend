import { getMyWishProductData } from '@/actions/mypage/getMyWishData'
import MyWishItemCount from '@/components/mypage/myWish/myWishItemCount'
import MyWishProducts from '@/components/mypage/myWish/myWishProducts'
import { myWishProductType } from '@/types/MyPageTypes'

export default async function MyWishPage() {
  const wishProductDatas: myWishProductType[] = await getMyWishProductData()

  return (
    <>
      <MyWishItemCount index={1} count={wishProductDatas.length} />
      <MyWishProducts wishProductDatas={wishProductDatas} />
    </>
  )
}
