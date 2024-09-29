import { myWishProductType } from '@/types/MyPageTypes'
import MyWishProductItem from './MyWishProductItem'

interface wishProductProps {
  wishProductDatas: myWishProductType[]
}

export default function MyWishProducts({ wishProductDatas }: wishProductProps) {
  return (
    <div>
      <ul className="w-full">
        {wishProductDatas && wishProductDatas.map((item) => <MyWishProductItem productItem={item} key={item.id} />)}
      </ul>
    </div>
  )
}
