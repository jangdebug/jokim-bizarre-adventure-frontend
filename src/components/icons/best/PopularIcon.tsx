import React from 'react'

export default function PopularIcon({
  width = 44,
  height = 44,
  color = '#131922',
  className,
}: {
  width?: number
  height?: number
  color?: string
  className?: string
}) {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" className={className ? className : ''}>
      <g stroke={color} fill="none" fillRule="evenodd">
        <path d="M34.1 38.5H9.9L6.875 13.75h30.25z" />
        <path d="M26.125 17.875V9.723c0-2.33-1.85-4.223-4.125-4.223-2.276 0-4.125 1.893-4.125 4.223v8.152M26.763 23.852a2.485 2.485 0 0 0-3.562 0L22 25.077l-1.202-1.225a2.483 2.483 0 0 0-3.56 0 2.602 2.602 0 0 0 0 3.631l1.202 1.225L22 32.34l3.56-3.632 1.203-1.225a2.604 2.604 0 0 0 0-3.631z" />
      </g>
    </svg>
  )
}
