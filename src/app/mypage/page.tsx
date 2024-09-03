import MyInfoTop from '@/components/mypage/myInfoTop'
import MyInfoLookUp from '@/components/mypage/myInfoLookUp'
import MyInfoCategory from '@/components/mypage/myInfoCategory'

export default function MyPage() {
  return (
    <>
      <section className="flex flex-col justify-end">
        <MyInfoTop />
        <MyInfoLookUp />
        <MyInfoCategory />
      </section>
    </>
  )
}
