import React from 'react'

export default function GiftIcon({
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
        <path d="M5.5 14.438h33l-2.234 6.874H7.734z" />
        <path d="m34.375 20.797-3.667 17.531H13.292L9.625 20.797M22 14.438V38.5M17.188 5.5l4.958 5.5 4.666-5.5" />
      </g>
    </svg>
  )
}
