import MyWishTab from '@/components/mypage/myWish/myWishTab'
import { myWishEventDatas } from '@/datas/dummy/mypage/MyWishData'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <MyWishTab />
      {children}
    </>
  )
}
