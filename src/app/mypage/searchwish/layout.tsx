import MyTab from '@/components/mypage/myTab'
import { myWishTabDatas } from '@/datas/dummy/mypage/MyTabData'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <MyTab tabData={myWishTabDatas} />
      {children}
    </>
  )
}
