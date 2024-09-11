import { RadioGroupItem } from '@/components/ui/Radio'
import { deliveryType } from '@/types/MyPageTypes'

interface DeliveryListItemProps {
  info: deliveryType
  isDefault: boolean
  onRadioChange: (value: string) => void
}

export default function DeliveryListItem({ info, isDefault, onRadioChange }: DeliveryListItemProps) {
  return (
    <div className="flex -space-y-1 space-x-2 py-5 border-b border-b-gray-200">
      <RadioGroupItem
        value={String(info.addressId)}
        id={`r${info.addressId}`}
        onClick={() => onRadioChange(String(info.addressId))}
      />
      <label htmlFor={`r${info.addressId}`} className="w-full">
        <div className="flex justify-between">
          <p className="items-center mb-3">
            <span className="mr-3 font-bold">{info.addressName}</span>
            <span className="text-gray-500">
              | {info.recipient}
              {isDefault && ' (기본배송지)'}
            </span>
          </p>
          <p className="text-sm text-gray-500">수정 {!isDefault && '| 삭제'}</p>
        </div>
        <div>
          <p className="mb-2 text-xs">
            <strong>
              ({info.zipCode}) {info.addressRoad.replace(/\[도로명\]/g, '').trim()} {info.addressDetail}
            </strong>
          </p>
          <p>
            <span className="text-sm text-gray-400">{info.phone}</span>
          </p>
        </div>
      </label>
    </div>
  )
}
