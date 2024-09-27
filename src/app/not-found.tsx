'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  return (
    <main className="w-full h-[100dvh] px-[24px] flex items-center justify-center flex-col">
      <div className="pb-[24px] flex flex-col items-center">
        <p className="font-bold text-[18px] leading-[24px] pb-[12px]">페이지를 찾을 수 없습니다.</p>
        <p className="text-[12px] flex flex-col items-center">
          <span>방문하시려는 페이지의 주소가 잘못 입력 되었거나,</span>
          <span>변경 혹은 삭제되어 페이지를 찾을 수 없습니다.</span>
          <span>입력하신 주소가 정확한지 다시 한번 확인해 주시기바랍니다.</span>
        </p>
      </div>
      <Button size={'auth'} onClick={() => router.back()}>
        돌아가기
      </Button>
    </main>
  )
}
