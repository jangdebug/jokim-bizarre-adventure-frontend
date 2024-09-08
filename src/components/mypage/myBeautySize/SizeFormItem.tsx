import React from 'react'

interface FormItemProps {
  label: string
  children: React.ReactNode
}

export default function SizeFormItem({ label, children }: FormItemProps) {
  return (
    <li className="flex justify-between items-center mb-4">
      <p className="w-28 mr-6">{label}</p>
      <div className="flex flex-grow justify-start items-center">{children}</div>
    </li>
  )
}
