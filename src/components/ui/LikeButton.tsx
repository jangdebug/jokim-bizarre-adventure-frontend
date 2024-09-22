'use client'

import { useState } from 'react'
import EmptyHeartIcon from '../icons/product/EmptyHeartIcon'
import FilledHeartIcon from '../icons/product/FilledHeartIcon'

export default function LikeButton({
  type,
  targetId,
  currentState = false,
}: {
  type: 'product' | 'event' | 'brand' | 'best' | 'basket'
  targetId: number
  currentState?: boolean
}) {
  const [isLiked, setIsLiked] = useState<boolean>(currentState)

  const handleLikeState = () => {
    console.log('like ', !isLiked, type, targetId)
    setIsLiked((prev) => !prev)
  }

  return <button onClick={handleLikeState}>{isLiked ? <FilledHeartIcon /> : <EmptyHeartIcon />}</button>
}
