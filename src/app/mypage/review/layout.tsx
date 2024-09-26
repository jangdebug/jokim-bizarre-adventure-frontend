import MyPoint from '@/components/mypage/myReview/MyPoint'
import ReviewDescription from '@/components/mypage/myReview/ReviewDescription'
import MyTab from '@/components/mypage/myTab'
import { myReviewTabDatas } from '@/datas/dummy/mypage/MyTabData'

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <main>
      <MyPoint />
      <MyTab tabData={myReviewTabDatas} />
      <ReviewDescription />
      {children}
    </main>
  )
}
