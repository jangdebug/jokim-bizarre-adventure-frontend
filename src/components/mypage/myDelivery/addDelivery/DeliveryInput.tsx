import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { phoneDatas } from '@/datas/dummy/mypage/MyDeliveryDatas'
import React from 'react'

export default function DeliveryInput() {
  return (
    <div>
      <Input type="text" name="addressName" placeholder="배송지명" className="mb-2" />
      <Input type="text" name="recipient" placeholder="받으시는 분" className="mb-2" />

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
