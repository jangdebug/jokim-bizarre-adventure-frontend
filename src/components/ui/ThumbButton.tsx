'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function ThumbButton({
  reviewId,
  currentState = false,
  likeCount,
}: {
  reviewId: number
  currentState?: boolean
  likeCount: number
}) {
  const [isLiked, setIsLiked] = useState<boolean>(currentState)
  const [currentLikeCount, setCurrentLikeCount] = useState<number>(likeCount)
  const handleLikeState = () => {
    if (isLiked) {
      setCurrentLikeCount(() => currentLikeCount - 1)
    } else {
      setCurrentLikeCount(() => currentLikeCount + 1)
    }
    setIsLiked((prev) => !prev)
    // 사용자 정보와 타겟 id 를 통해 상태 변경 api 전송
  }

  return (
    <button onClick={handleLikeState} className="flex items-center gap-[5px]">
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
      <span>{currentLikeCount}</span>
    </button>
  )
}
