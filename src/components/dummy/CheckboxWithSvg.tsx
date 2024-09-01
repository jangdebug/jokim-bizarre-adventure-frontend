import React from 'react'
import CheckedBox from '../icons/sign-up/CheckedBox'
import UnCheckedBox from '../icons/sign-up/UnCheckedBox'

interface InputWithClearProps {
  id?: string | undefined
  name?: string | undefined
  checked?: boolean | undefined
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
}

export default function CheckboxWithSvg({ id, name, checked, onChange }: InputWithClearProps) {
  return (
    <>
      <input id={id} className="sr-only" type="checkbox" name={name} checked={checked} onChange={onChange} />
      <div className="cursor-pointer flex items-center justify-center w-6 h-6 border-1 border-gray-300  bg-white">
        {checked ? <CheckedBox /> : <UnCheckedBox />}
      </div>
    </>
  )
}
