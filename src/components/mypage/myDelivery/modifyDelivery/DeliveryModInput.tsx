import { Input, InputProps } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { phoneDatas } from '@/datas/dummy/mypage/MyDeliveryDatas'
import React from 'react'

interface InputPorps {
  name: string
  recip: string
}

export default function DeliveryModInput({ name, recip }: InputPorps) {
  return (
    <div>
      <Input type="text" name="addressName" placeholder="배송지명" className="mb-2" defaultValue={name} />
      <Input type="text" name="recipient" placeholder="받으시는 분" className="mb-2" defaultValue={recip} />

      <div className="flex justify-between">
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
      </div>
    </div>
  )
}
