import { Checkbox } from '@/components/ui/checkbox'
import EventDetailTab from './EventDetailTab'

interface tabProps {
  eventDetailTabDatas: {
    id: number
    productCode: number
    detailTabName: string
  }[]
}

export default function EventDetailCategory({ eventDetailTabDatas }: tabProps) {
  const changeTab = (id: number) => {}

  return (
    <>
      <section className="mt-8">
        <div className="">
          <ul className="border-t border-[#e0e0e0] grid grid-cols-2 gap-0">
            {eventDetailTabDatas.map((tab, index) => (
              <EventDetailTab key={tab.id} idx={index} tabName={tab.detailTabName} />
            ))}
          </ul>
        </div>
        <div className="px-[24px] my-4 flex items-center gap-3">
          <Checkbox />
          <span className="text-sm">품절상품 제외</span>
        </div>
        <div className="p-[24px] my-4">
          <span className="text-base font-bold mb-4">{'selectedTab'}</span>
        </div>

        <div className="px-[24px] mx-auto">
          <ul className="grid grid-cols-2 gap-5">
            {/* {categoryItems.map((item) => (
              <li className="mb-3" key={item.id}>
                <Image
                  src={item.productImageUrl}
                  width={200}
                  height={200}
                  alt={item.productName}
                  priority
                  className="w-full mb-3"
                />
                <div className="mb-2 text-xs">
                  <p className="text-sm font-bold">{item.brandName}</p>
                  <p>{item.productName}</p>
                  <p>{item.price}</p>
                  <p>
                    ★ {item.likeAverage} <span className="text-gray-400">({item.likeCount})</span>
                  </p>
                </div>
              </li>
            ))} */}
          </ul>
        </div>
      </section>
    </>
  )
}

// 'use client'

// import { getEventCategoryItemDatas } from '@/actions/event/getEventDetail'
// import { Checkbox } from '@/components/ui/checkbox'
// import { eventCategoryItemType } from '@/types/EventTypes'
// import Image from 'next/image'
// import React, { useEffect, useState } from 'react'

// interface tabProps {
//   eventDetailTabDatas: {
//     id: number
//     productCode: number
//     detailTabName: string
//   }[]
// }

// export default function EventDetailCategory({ eventDetailTabDatas }: tabProps) {
//   // const [selectedId, setSelectedId] = useState<number>(eventDetailTabDatas[0].id)
//   // const [selectedTab, setSelectedTab] = useState<string>(eventDetailTabDatas[0].detailTabName)
//   // const [categoryItems, setCategoryItems] = useState<eventCategoryItemType[]>([])

//   // //주소로 관리하도록 변경
//   // const changeTab = (id: number, tabName: string) => {
//   //   setSelectedId(id)
//   //   setSelectedTab(tabName)
//   // }

//   // useEffect(() => {
//   //   const fetchCategoryItems = async () => {
//   //     try {
//   //       const items = await getEventCategoryItemDatas(selectedId)
//   //       setCategoryItems(items)
//   //     } catch (error) {
//   //       console.error('Error fetching category items:', error)
//   //     }
//   //   }

//   //   fetchCategoryItems()
//   // }, [selectedId])

//   return (
//     <>
//       <section className="mt-8">
//         <div className="">
//           <ul className="border-t border-[#e0e0e0] grid grid-cols-2 gap-0">
//             {eventDetailTabDatas.map((tab, index) => (
//               <li
//                 key={tab.id}
//                 // onClick={() => changeTab(tab.id, tab.detailTabName)}
//                 className={`p-4 border-b border-[#e0e0e0]
//                 ${index % 2 !== 0 ? '' : 'border-r'}
//                 // ${selectedTab === tab.detailTabName ? 'bg-black text-white' : 'bg-white'}
//                 `}
//               >
//                 {tab.detailTabName}
//               </li>
//             ))}
//           </ul>
//         </div>
//         <div className="px-[24px] my-4 flex items-center gap-3">
//           <Checkbox />
//           <span className="text-sm">품절상품 제외</span>
//         </div>
//         <div className="p-[24px] my-4">
//           <span className="text-base font-bold mb-4">{'selectedTab'}</span>
//         </div>

//         <div className="px-[24px] mx-auto">
//           <ul className="grid grid-cols-2 gap-5">
//             {/* {categoryItems.map((item) => (
//               <li className="mb-3" key={item.id}>
//                 <Image
//                   src={item.productImageUrl}
//                   width={200}
//                   height={200}
//                   alt={item.productName}
//                   priority
//                   className="w-full mb-3"
//                 />
//                 <div className="mb-2 text-xs">
//                   <p className="text-sm font-bold">{item.brandName}</p>
//                   <p>{item.productName}</p>
//                   <p>{item.price}</p>
//                   <p>
//                     ★ {item.likeAverage} <span className="text-gray-400">({item.likeCount})</span>
//                   </p>
//                 </div>
//               </li>
//             ))} */}
//           </ul>
//         </div>
//       </section>
//     </>
//   )
// }
