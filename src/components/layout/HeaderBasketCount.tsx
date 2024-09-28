import { getBasketCount } from '@/actions/basket/getBasketListData'

export default async function HeaderBasketCount() {
  const basketCount = await getBasketCount()
  return (
    <span
      className={`absolute
                                  top-[8px]
                                  right-[10px]
                                  flex
                                  w-[20px]
                                  h-[20px]
                                  text-[10px]
                                  bg-[rgb(217,156,99)]
                                  text-white
                                  items-center
                                  justify-center
                                  rounded-full
                                  leading-[0]
                                  z-[40]`}
    >
      {Number(basketCount)}
    </span>
  )
}
