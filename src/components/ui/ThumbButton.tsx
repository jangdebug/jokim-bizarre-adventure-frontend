'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function ThumbButton({ reviewId, currentState = false }: { reviewId: number; currentState?: boolean }) {
  const [isLiked, setIsLiked] = useState<boolean>(currentState)

  const handleLikeState = () => {
    setIsLiked((prev) => !prev)
    // 사용자 정보와 타겟 id 를 통해 상태 변경 api 전송
  }

  return (
    <button onClick={handleLikeState}>
      {isLiked ? (
        <Image
          src={'https://cdn-mo.sivillage.com/mo/assets/comm/image/icon_review_like_on.png'}
          alt="filledThumbIcon"
          height={100}
          width={100}
          className="w-full h-full"
        />
      ) : (
        <Image
          src={'https://cdn-mo.sivillage.com/mo/assets/comm/image/icon_review_like.png'}
          alt="unFilledThumbIcon"
          height={100}
          width={100}
          className="w-full h-full"
        />
      )}
    </button>
  )
}
