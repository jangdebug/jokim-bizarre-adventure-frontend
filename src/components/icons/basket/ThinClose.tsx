import React from 'react'

export default function ThinClose({ width = 20, height = 20 }: { width?: number; height?: number }) {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 48.000000 48.000000"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(0.000000,48.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
        <path
          d="M117 363 c-4 -4 18 -33 50 -65 l57 -58 -57 -58 c-32 -32 -54 -61 -50
-65 4 -4 33 18 65 50 l58 57 58 -57 c32 -32 61 -54 65 -50 4 4 -18 33 -50 65
l-57 58 57 58 c32 32 54 61 50 65 -4 4 -33 -18 -65 -50 l-58 -57 -58 57 c-32
32 -61 54 -65 50z"
        />
      </g>
    </svg>
  )
}
