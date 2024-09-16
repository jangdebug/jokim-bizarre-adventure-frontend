import { deliveryType } from '@/types/MyPageTypes'

interface DeliveryItemProps {
  info: deliveryType
}

export default function DeliveryItem({ info }: DeliveryItemProps) {
  return (
    <div className="flex gap-4 py-6 border-b border-gray-200">
      <div className="flex items-start">
        <input
          type="radio"
          id={`deliveryAddress-${info.addressId}`}
          name="deliveryAddress"
          value={info.addressId}
          defaultChecked={info.isDefault}
          className="h-6 w-6 accent-black"
        />
      </div>

      <label htmlFor={`deliveryAddress-${info.addressId}`} className="w-full">
        <div className="flex justify-between">
          <p className="font-bold items-center mb-3">
            <span className="mr-3">{info.addressName}</span>
            <span className="text-gray-400">
              | {info.recipient}
              {`${info.isDefault ? ' (기본배송지)' : ''}`}
            </span>
          </p>
          <p className="text-sm text-gray-500">수정 {`${info.isDefault ? '| 삭제' : ''}`}</p>
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
