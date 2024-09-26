'use client'

import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

export default function Error() {
  const router = useRouter()
  return (
    <main className="w-full h-[100dvh] px-[24px] flex items-center justify-center flex-col">
      <div className="pb-[24px] flex flex-col items-center">
        <p className="font-bold text-[18px] leading-[24px] pb-[12px]">죄송합니다.</p>
        <p className="text-[12px] flex flex-col items-center">
          <span>현재 요청하신 작업에 대해 문제가 발생했습니다.</span>
          <span>빠른 시일내로 문제를 해결하여</span>
          <span>원활한 서비스를 이용가능하도록 하겠습니다.</span>
        </p>
      </div>
      <Button size={'auth'} onClick={() => router.back()}>
        돌아가기
      </Button>
    </main>
  )
}
