import Image from 'next/image'

interface productItemProps {
  productItem: {
    id: number
    wishImageUrl: string
    wishBrand: string
    wishName: string
    wishAmmount: number
    wishPrice: number
  }
}

export default function MyWishProductItem({ productItem }: productItemProps) {
  return (
    <li className="p-5 pb-8 mt-10 border-b border-[#f0f0f0] flex justify-start">
      <div className="w-[45%]">
        <Image src={productItem.wishImageUrl} width={300} height={300} alt={productItem.wishName} priority></Image>
      </div>
      <div className="ml-5 my-2 w-[55%]">
        <div className="text-xs font-bold my-2">{productItem.wishBrand}</div>
        <div>
          <div className="text-xsm font-bold mb-1 w-full">
            <p className="overflow-hidden text-ellipsis whitespace-nowrap">{productItem.wishName}</p>
          </div>
          <div className="text-xs mb-2 truncate-lines">
            <p>{productItem.wishPrice.toLocaleString()}원</p>
          </div>
        </div>
      </div>
    </li>
  )
}
