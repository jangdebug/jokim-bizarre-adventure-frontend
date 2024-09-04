import Image from 'next/image'
import Link from 'next/link'
import SmallStarIcon from '../icons/product/SmallStarIcon'
import EmptyHeartIcon from '../icons/product/EmptyHeartIcon'
import FilledHeartIcon from '../icons/product/FilledHeartIcon'
import ProductItem from '../icons/product/ProductItem'

export default function ProductList() {
  return (
    <>
      <ul className="grid grid-cols-2 w-full gap-x-2 px-[24px]">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </ul>
    </>
  )
}
