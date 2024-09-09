'use client'

import { useState } from 'react'
import EmptyHeartIcon from '../icons/product/EmptyHeartIcon'
import FilledHeartIcon from '../icons/product/FilledHeartIcon'

export default function LikeButton({ type, targetId }: { type: 'product' | 'event' | 'brand'; targetId: number }) {
  const [isLiked, setIsLiked] = useState<boolean>(false)

  const handleLikeState = () => {
    console.log('like ', !isLiked, type, targetId)
    setIsLiked((prev) => !prev)
  }

  return <button onClick={handleLikeState}>{isLiked ? <FilledHeartIcon /> : <EmptyHeartIcon />}</button>
}
