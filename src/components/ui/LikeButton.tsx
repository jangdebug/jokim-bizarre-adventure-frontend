'use client'

import { useState } from 'react'
import EmptyHeartIcon from '../icons/product/EmptyHeartIcon'
import FilledHeartIcon from '../icons/product/FilledHeartIcon'

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState<boolean>(false)

  const handleLikeState = () => {
    setIsLiked((prev) => !prev)
  }

  return <button onClick={handleLikeState}>{isLiked ? <FilledHeartIcon /> : <EmptyHeartIcon />}</button>
}
