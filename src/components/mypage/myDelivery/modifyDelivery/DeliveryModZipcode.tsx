'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'

interface ZipPorps {
  zip: string
  road: string
  jib: string
  detail: string
}

export default function DeliveryModZipcode({ zip, road, jib, detail }: ZipPorps) {
  const [modData, setModData] = useState({
    zipCode: zip,
    addressRoad: road,
    addressJibeon: jib,
    addressDetail: detail,
  })

  const handleAddressSearch = () => {
    let zip = '48058'
    let addressRoad = '[도로명] 부산광역시 해운대구 센텀남대로 35 (우동)'
    let addressJibeon = '[지번] 부산광역시 해운대구 우동 1495 신세계백화점센텀시티점'
    let addrDetail = ' 305호'

    setModData((prevFormData) => ({
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
        <Input type="hidden" name="zipCode" value={modData.zipCode} />
        <p className="ml-4 text-gray-400 flex items-center">{modData.zipCode ? modData.zipCode : '우편번호'}</p>
        <Button type="button" variant={'outline'} className="w-1/3" onClick={handleAddressSearch}>
          주소검색
        </Button>
      </div>

      <div className="my-3">
        <input type="hidden" name="addressRoad" value={modData.addressRoad} />
        <input type="hidden" name="addressJibeon" value={modData.addressJibeon} />
        <input type="hidden" name="addressDetail" value={modData.addressDetail} />

        <p>
          {modData.addressRoad} {modData.addressDetail}
        </p>
        <p>
          {modData.addressJibeon} {modData.addressDetail}
        </p>
      </div>
    </div>
  )
}
