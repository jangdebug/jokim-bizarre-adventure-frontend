import Divider from '@/components/ui/Divider'
import Image from 'next/image'
import React from 'react'
import EventDetailAnnounce from './EventDetailAnnounce'

interface relationProps {
  eventRelationDatas: {
    id: number
    productCategoryId: number
    brandName: string
    categoryName: string
    productImageUrl: string
    recommentItem: {
      id: number
      productId: number
      productImageUrl: string
      brandName: string
      productName: string
      price: number
    }[]
  }[]
}

export default function EventDetailRelation({ eventRelationDatas }: relationProps) {
  return (
    <section>
      {eventRelationDatas.map((item) => (
        <div className="ProductSection" key={item.id}>
          <div className="mb-12">
            <Image src={item.productImageUrl} width={200} height={200} alt={item.categoryName} className="w-full" />
          </div>

          <ul className="px-[24px] gap-2 grid grid-cols-2">
            {item.recommentItem.map((recomment) => (
              <li key={recomment.id}>
                <div>
                  {/* <div className="relative"> */}
                  {/* <div className="absolute w-full h-full bg-black z-[1] opacity-[0.03]" /> */}
                  <Image
                    src={recomment.productImageUrl}
                    width={200}
                    height={200}
                    alt={recomment.productName}
                    className="w-full"
                  />
                </div>

                <div className="text-xs mx-1 my-6">
                  <p className="text-sm font-bold mb-3">{recomment.brandName}</p>
                  <p className="mb-1">{recomment.productName}</p>
                  <p>{recomment.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Divider />
      <EventDetailAnnounce brand={eventRelationDatas[0].brandName} />
    </section>
  )
}
