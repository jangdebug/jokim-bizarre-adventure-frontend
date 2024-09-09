import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import SizeFormItem from '../myBeautySize/SizeFormItem'

interface rangeProps {
  defaultRange: string
  handleRange: (value: string) => void
}

export default function DateRange({ defaultRange, handleRange }: rangeProps) {
  return (
    <div className="flex justify-end items-center">
      <SizeFormItem label="">
        <Select name="Range" defaultValue={defaultRange} onValueChange={handleRange}>
          <SelectTrigger className="w-20 border-0">
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1개월</SelectItem>
            <SelectItem value="3">3개월</SelectItem>
            <SelectItem value="6">6개월</SelectItem>
          </SelectContent>
        </Select>
      </SizeFormItem>
    </div>
  )
}
