import GiftIcon from '@/components/icons/best/GiftIcon'
import PopularIcon from '@/components/icons/best/PopularIcon'
import ViewIcon from '@/components/icons/best/ViewIcon'
import { BestTabTypes } from '@/types/BestTypes'

export const bestTabDatas: BestTabTypes[] = [
  {
    id: 1,
    name: '인기 있는 상품',
    url: '/best/popular',
    icon: PopularIcon,
  },
  {
    id: 2,
    name: '많이 보는 상품',
    url: '/best/view',
    icon: ViewIcon,
  },
  {
    id: 3,
    name: '선물하기 좋은 상품',
    url: '/best/gift',
    icon: GiftIcon,
  },
]
