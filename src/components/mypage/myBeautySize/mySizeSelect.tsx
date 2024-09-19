import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { mySizeType, selectSizeType } from '@/types/MyPageTypes'
import { useEffect, useState } from 'react'

interface mySizeProps {
  mySizeData: string | undefined
  selectOptionDatas: selectSizeType[]
  setInputValues: React.Dispatch<React.SetStateAction<mySizeType>>
}

export default function MySizeSelect({ mySizeData, setInputValues, selectOptionDatas }: mySizeProps) {
  const dValue = mySizeData !== undefined ? mySizeData : '선택'

  useEffect(() => {
    if (mySizeData !== undefined) {
      setInputValues((prev) => ({
        ...prev,
        bottomSize: mySizeData.toString(),
      }))
    }
    console.log('aaa -> ', mySizeData)
  }, [mySizeData])

  return (
    <>
      <div className="w-2/3 flex items-center">
        <Select name="selectSize">
          <SelectTrigger className="">
            <SelectValue placeholder={dValue} />
          </SelectTrigger>
          <SelectContent>
            {selectOptionDatas.map((option) => (
              <SelectItem key={option.id} value={option.option}>
                {option.option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </>
  )
}
