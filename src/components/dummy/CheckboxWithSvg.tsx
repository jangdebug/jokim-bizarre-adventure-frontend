'use client'
import { useEffect, useState } from 'react'
import CheckedBox from '../icons/sign-up/CheckedBox'
import UnCheckedBox from '../icons/sign-up/UnCheckedBox'

interface InputWithClearProps {
  id?: string | undefined
  value?: string | number | readonly string[] | undefined
  name?: string | undefined
  checked?: boolean | undefined
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export default function CheckboxWithSvg({ id, name, value, checked = undefined, onChange }: InputWithClearProps) {
  const [checkedImageState, setCheckedImageState] = useState<boolean>()

  useEffect(() => {
    setCheckedImageState(checked ? checked : false)
  }, [checked])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedImageState(e.target.checked)
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <>
      <input
        id={id}
        className="sr-only"
        type="checkbox"
        value={value}
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <div className="cursor-pointer flex items-center justify-center w-6 h-6 border-1 border-gray-300  bg-white">
        {checkedImageState ? <CheckedBox /> : <UnCheckedBox />}
      </div>
    </>
  )
}
