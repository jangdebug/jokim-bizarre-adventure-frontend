import { RadioGroupItem } from '@/components/ui/Radio'

interface DeliveryListItemProps {
  info: {
    addressId: number
    addressName: string
    recipient: string
    phone: string
    zipCode: string
    address: string
    addressDetail: string
  }
  currentDefaultId: number
  onRadioChange: (value: string) => void
}

export default function DeliveryListItem({ info, currentDefaultId, onRadioChange }: DeliveryListItemProps) {
  return (
    <div className="flex -space-y-1 space-x-2 py-5 border-b border-b-gray-200">
      <RadioGroupItem
        value={String(info.addressId)}
        id={`r${info.addressId}`}
        onClick={() => onRadioChange(String(info.addressId))}
      />
      <label htmlFor={`r${info.addressId}`} className="w-full">
        <div className="flex justify-between">
          <p className="font-bold items-center mb-3">
            <span className="mr-3">{info.addressName}</span>
            <span className="text-gray-400">
              | {info.recipient}
              {info.addressId === currentDefaultId && ' (기본배송지)'}
            </span>
          </p>
          <p className="text-sm text-gray-500">수정 {info.addressId !== currentDefaultId && '| 삭제'}</p>
        </div>
        <div>
          <p className="mb-2">
            ({info.zipCode}) {info.address} {info.addressDetail}
          </p>
          <p>
            <span className="text-sm text-gray-400">{info.phone}</span>
          </p>
        </div>
      </label>
    </div>
  )
}
