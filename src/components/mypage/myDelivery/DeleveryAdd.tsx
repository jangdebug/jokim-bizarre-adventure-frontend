'use client'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import Divider from '@/components/ui/Divider'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { phoneType } from '@/types/MyPageTypes'
import React, { useState } from 'react'
import DeliveryAddPolicy from './DeliveryAddPolicy'

interface deliveryAddInfo {
  addressName: string
  recipient: string
  phone: string
  dispCellNo: string
  zipCode: string
  addressRoad: string
  addressJibeon: string
  addressDetail: string
  checkDefault: boolean
  deliveryPolicy: boolean
}

export default function DeleveryAdd({ phoneDatas }: { phoneDatas: phoneType[] }) {
  //const router = useRouter()

  const [addData, setAddData] = useState<deliveryAddInfo>({
    addressName: '',
    recipient: '',
    dispCellNo: '',
    phone: '',
    zipCode: '',
    addressRoad: '',
    addressJibeon: '',
    addressDetail: '',
    checkDefault: false,
    deliveryPolicy: false,
  })

  const handleAddressSearch = () => {
    let zip = '88848'
    let addressRoad = '[도로명]'
    let addressJibeon = '[지번]'
    let addrDetail = ' 상세'

    setAddData((prevFormData) => ({
      ...prevFormData,
      zipCode: zip,
      addressRoad: addressRoad,
      addressJibeon: addressJibeon,
      addressDetail: addrDetail,
    }))
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name, value } = e.target

    setAddData({
      ...addData,
      [name]: value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    formData.set('zipCode', addData.zipCode)
    formData.set('addressRoad', addData.addressRoad)
    formData.set('addressJibeon', addData.addressJibeon)
    formData.set('addressDetail', addData.addressDetail)

    const addressName = formData.get('addressName') as string
    const recipient = formData.get('recipient') as string
    const dispCellNo = formData.get('dispCellNo') as string
    const phone = formData.get('phone') as string
    const zipCode = formData.get('zipCode') as string
    const addressRoad = formData.get('addressRoad') as string
    const addressJibeon = formData.get('addressJibeon') as string
    const addressDetail = formData.get('addressDetail') as string
    const checkDefault = formData.get('checkDefault') !== null ? true : (false as boolean)
    const deliveryPolicy = formData.get('deliveryPolicy') !== null ? true : (false as boolean)

    let errorMessage = ''
    switch (true) {
      case !addressName:
        errorMessage = '배송지명을 입력해 주세요.'
        break
      case !recipient:
        errorMessage = '받으시는 분을 입력해 주세요.'
        break
      case !phone:
        errorMessage = '전화번호를 입력해 주세요.'
        break
      case !zipCode:
        errorMessage = '주소를 선택해주세요.'
        break
      case !deliveryPolicy:
        errorMessage = '배송지 정보 수집 및 이용에 대한 동의 항목에 체크해주세요.'
        break
      default:
        // Fetch 요청 등을 여기에 추가
        //router.push('/mypage/delivery-info')

        return // 폼 제출을 계속 진행
    }

    console.log(errorMessage)
  }

  return (
    <form onSubmit={handleSubmit}>
      <section className="mb-60">
        <div className="px-[24px] m-auto">
          <ul>
            <li className="mb-2">
              <Input type="text" name="addressName" placeholder="배송지명" onChange={handleInputChange} />
            </li>
            <li className=" mb-2">
              <Input type="text" name="recipient" placeholder="받으시는 분" onChange={handleInputChange} />
            </li>
            <li className="flex justify-between">
              <div className="w-1/5">
                <Select name="dispCellNo" defaultValue={'010'}>
                  <SelectTrigger>
                    <SelectValue placeholder="선택" />
                  </SelectTrigger>
                  <SelectContent>
                    {phoneDatas?.map((item) => (
                      <SelectItem key={item.id} value={item.dispCellNo}>
                        {item.dispCellNo}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-[78%]">
                <Input type="text" name="phone" />
              </div>
            </li>
            <li>
              <div className="mt-6 mb-4 border-b-2 border-gray-600 flex items-center">
                <Input
                  type="text"
                  name="zipCode"
                  placeholder="우편번호"
                  defaultValue={addData.zipCode}
                  disabled
                  className="border-0 disabled:bg-white disabled:text-black"
                  onChange={handleInputChange}
                />
                <Button type="button" variant={'outline'} className="w-1/3" onClick={handleAddressSearch}>
                  주소검색
                </Button>
              </div>
              <div className="mb-3">
                <p>
                  {addData.addressRoad} {addData.addressDetail}
                </p>
                <p>
                  {addData.addressJibeon} {addData.addressDetail}
                </p>
              </div>
            </li>
            <li className="pt-10 pb-5 font-bold flex justify-between">
              <div className="flex items-center text-gray-400">
                <Checkbox name="addDelivery" id="add" defaultChecked={true} className="bg-gray-400" disabled />
                <label className="mx-3" htmlFor="add">
                  배송지 목록에 추가
                </label>
              </div>
              <div className="flex items-center">
                <Checkbox name="checkDefault" id="default" defaultChecked={false} />
                <label className="mx-3" htmlFor="default">
                  기본 배송지로 설정
                </label>
              </div>
            </li>
          </ul>
        </div>

        <Divider />
        <DeliveryAddPolicy />
      </section>
      <div className="pt-3 border-t border-gray-500">
        <Button className="w-full p-6">배송지 적용</Button>
      </div>
    </form>
  )
}
