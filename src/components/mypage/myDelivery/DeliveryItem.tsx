import { deliveryType } from '@/types/MyPageTypes'
import DeliveryDelete from './DeliveryDelete'
import Link from 'next/link'

interface DeliveryItemProps {
  info: deliveryType
  changeList: React.Dispatch<React.SetStateAction<deliveryType[]>>
}

export default function DeliveryItem({ info, changeList }: DeliveryItemProps) {
  const formatPhone = (phone: string) => {
    if (phone.length === 7) return `${phone.slice(0, 3)}-${phone.slice(3)}`
    else if (phone.length === 8) return `${phone.slice(0, 4)}-${phone.slice(4)}`
  }

  return (
    <div className="flex gap-4 py-6 border-b border-gray-200">
      <div className="flex items-start">
        <input
          type="radio"
          id={`deliveryAddress-${info.addressCode}`}
          name={`deliveryAddress`}
          value={info.addressCode}
          defaultChecked={info.isDefault}
          className="h-6 w-6 accent-black"
        />
      </div>

      <label htmlFor={`deliveryAddress-${info.addressCode}`} className="w-full">
        <div className="flex justify-between">
          <p className="font-bold items-center mb-3">
            <span className="mr-3">{info.addressName}</span>
            <span className="text-gray-400">
              | {info.recipient}
              {`${info.isDefault ? ' (기본배송지)' : ''}`}
            </span>
          </p>
          <p className="text-sm text-gray-500">
            <Link href={`/mypage/delivery-info/modify?code=${info.addressCode}`}>수정</Link>
            {`${info.isDefault ? '' : '| '}`}
            {!info.isDefault && (
              <DeliveryDelete addressCode={info.addressCode} addressName={info.addressName} changeList={changeList} />
            )}
          </p>
        </div>
        <div>
          <p className="mb-2">
            ({info.zipCode}) {info.addressRoad} {info.addressDetail}
          </p>
          <p>
            <span className="text-sm text-gray-400">
              {info.dispCellNo}-{formatPhone(info.phone)}
            </span>
          </p>
        </div>
      </label>
    </div>
  )
}
