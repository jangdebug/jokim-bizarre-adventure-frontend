import AbleReview from '@/components/mypage/myReview/AbleReview'

export default async function Able() {
  const handleRange = async (range: string) => {
    'use server'
    console.log('page --> ', range)

    return null
  }

  return (
    <main>
      <AbleReview />
    </main>
  )
}
