// 'use client'

// import Divider from '@/components/ui/Divider'
// import { Input } from '@/components/ui/input'
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
// import { mySizeType, selectSizeType } from '@/types/MyPageTypes'
// import React, { useState } from 'react'
// import MyRegister from './MyRegister'
// import SizeFormItem from './SizeFormItem'

// interface beautySizeType {
//   mySizeData: mySizeType
//   topSizeDatas: selectSizeType[]
//   bottomSizeDatas: selectSizeType[]
//   footSizeDatas: selectSizeType[]
//   handleSize: (formData: FormData) => void
// }

// export default function MySize({
//   mySizeData,
//   topSizeDatas,
//   bottomSizeDatas,
//   footSizeDatas,
//   handleSize,
// }: beautySizeType) {
//   const [formData, setFormData] = useState<mySizeType>({
//     id: mySizeData.id,
//     height: mySizeData.height,
//     weight: mySizeData.weight,
//     topSize: mySizeData.topSize,
//     bottomSize: mySizeData.bottomSize,
//     footSize: mySizeData.footSize,
//     agreement: mySizeData.agreement,
//   })

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     e.preventDefault()
//     const { name, value } = e.target

//     setFormData({
//       ...formData,
//       [name]: value,
//     })
//   }

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()

//     const formData = new FormData(e.currentTarget)
//     const height = formData.get('height')
//     const weight = formData.get('weight')
//     const topSize = formData.get('topSize')
//     const bottomSize = formData.get('bottomSize')
//     const footSize = formData.get('footSize')
//     const agreement = formData.get('agreement') !== null ? true : false

//     let errorMessage = ''
//     switch (true) {
//       case !height:
//         errorMessage = '키를 입력해 주세요.'
//         break
//       case !weight:
//         errorMessage = '몸무게를 입력해 주세요.'
//         break
//       case !topSize:
//         errorMessage = '상의 사이즈를 선택해 주세요.'
//         break
//       case !bottomSize:
//         errorMessage = '하의 사이즈를 선택해 주세요.'
//         break
//       case !footSize:
//         errorMessage = '신발 사이즈를 선택해 주세요.'
//         break
//       case !agreement:
//         errorMessage = '개인정보 수집 및 이용 동의 항목에 체크해주세요.'
//         break
//       default:
//         console.log('Height:', height)
//         console.log('Weight:', weight)
//         console.log('Top Size:', topSize)
//         console.log('Bottom Size:', bottomSize)
//         console.log('Foot Size:', footSize)
//         console.log('Agreement:', agreement)
//         // Fetch 요청 등을 여기에 추가
//         return // 폼 제출을 계속 진행
//     }
//     console.log(errorMessage)
//   }

//   return (
//     <section>
//       <form onSubmit={handleSubmit}>
//         <div className="w-11/12 m-auto my-10">
//           <ul>
//             <SizeFormItem label="키">
//               <Input
//                 className="w-10/12 border-r-0"
//                 type="text"
//                 name="height"
//                 placeholder="입력"
//                 defaultValue={mySizeData.height}
//                 onChange={handleInputChange}
//               />
//               <span className="w-1/6 h-[48px] border border-[#e0e0e0] border-l-0 text-center leading-10">cm</span>
//             </SizeFormItem>

//             <SizeFormItem label="몸무게">
//               <Input
//                 className="w-10/12 border-r-0"
//                 type="text"
//                 name="weight"
//                 placeholder="입력"
//                 defaultValue={mySizeData.weight}
//                 onChange={handleInputChange}
//               />
//               <span className="w-1/6 h-[48px] border border-[#e0e0e0] border-l-0 text-center leading-10">kg</span>
//             </SizeFormItem>

//             <SizeFormItem label="평소 상의 사이즈">
//               <Select
//                 name="topSize"
//                 defaultValue={mySizeData.topSize}
//                 //  onValueChange={handleSelectChange('topSize')} //select는 고정된 값이므로 상태관리 필요X
//               >
//                 <SelectTrigger>
//                   <SelectValue placeholder="선택" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {topSizeDatas?.map((item) => (
//                     <SelectItem key={item.id} value={item.option}>
//                       {item.option}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </SizeFormItem>

//             <SizeFormItem label="평소 하의 사이즈">
//               <Select name="bottomSize" defaultValue={mySizeData.bottomSize}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="선택" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {bottomSizeDatas?.map((item) => (
//                     <SelectItem key={item.id} value={item.option}>
//                       {item.option}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </SizeFormItem>

//             <SizeFormItem label="평소 신발 사이즈">
//               <Select name="footSize" defaultValue={mySizeData.footSize}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="선택" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {footSizeDatas?.map((item) => (
//                     <SelectItem key={item.id} value={item.option}>
//                       {item.option}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </SizeFormItem>
//           </ul>
//         </div>

//         <Divider />
//         <MyRegister agreement={mySizeData.agreement} />
//       </form>
//     </section>
//   )
// }
