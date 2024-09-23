import Image from 'next/image'
import React from 'react'

export default function ProductDetailSwiperItem({ url }: { url: string }) {
  return (
    <>
      <div className="absolute top-0 w-full z-[5] h-[16rem] product-image-linear-bg"></div>
      <Image
        src={url}
        alt="productImage"
        width={0}
        height={0}
        priority={true}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
      />
    </>
  )
}
