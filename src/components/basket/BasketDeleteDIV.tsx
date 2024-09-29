'use client'

import React from 'react'
import ThinClose from '../icons/basket/ThinClose'
import { basketDeleteAction } from '@/actions/basket/getBasketListData'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/DialogOverlay'
import { Button } from '../ui/button'

export default function BasketDeleteDIV({
  basketCode,
  productName,
}: {
  basketCode: string
  productName: string | undefined
}) {
  const handleDelete = async () => {
    const res = basketDeleteAction(basketCode)
  }

  return (
    <div className="mx-2">
      {' '}
      <Dialog>
        <DialogTrigger asChild>
          {/* <span>삭제</span> */}
          <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 48.000000 48.000000"
            preserveAspectRatio="xMidYMid meet"
          >
            <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
              <path
                d="M117 363 c-4 -4 18 -33 50 -65 l57 -58 -57 -58 c-32 -32 -54 -61 -50
-65 4 -4 33 18 65 50 l58 57 58 -57 c32 -32 61 -54 65 -50 4 4 -18 33 -50 65
l-57 58 57 58 c32 32 54 61 50 65 -4 4 -33 -18 -65 -50 l-58 -57 -58 57 c-32
32 -61 54 -65 50z"
              />
            </g>
          </svg>
        </DialogTrigger>

        <DialogContent className="w-2/3">
          <DialogHeader>
            <DialogTitle>{productName}</DialogTitle>
            <DialogDescription>상품를 삭제하시겠습니까?</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" onClick={() => handleDelete()}>
                삭제
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

{
  /* <div className="mx-2" onClick={handleDelete}>
<ThinClose />
</div> */
}
