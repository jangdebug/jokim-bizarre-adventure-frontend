'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

export default function DeliveryZipcode() {
  const [addData, setAddData] = useState({
    zipCode: '',
    addressRoad: '',
    addressJibeon: '',
    addressDetail: '',
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

  return (
    <div>
      <div className="mt-6 pb-3 border-b border-gray-600 flex justify-between">
        <Input type="hidden" name="zipCode" value={addData.zipCode} />
        <p className="ml-4 text-gray-400 flex items-center">{addData.zipCode ? addData.zipCode : '우편번호'}</p>
        <Button type="button" variant={'outline'} className="w-1/3" onClick={handleAddressSearch}>
          주소검색
        </Button>
      </div>

      <div className="my-3">
        <input type="hidden" name="addressRoad" value={addData.addressRoad} />
        <input type="hidden" name="addressJibeon" value={addData.addressJibeon} />
        <input type="hidden" name="addressDetail" value={addData.addressDetail} />

        <p>
          {addData.addressRoad} {addData.addressDetail}
        </p>
        <p>
          {addData.addressJibeon} {addData.addressDetail}
        </p>
      </div>
    </div>
  )
}
