import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-[48px] w-full  border border-[#e0e0e0] bg-background px-[16px] py-[14px] text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-[#e0e0e0] focus-visible:outline-none focus-visible:ring-ring  disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[#e0e0e0]',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
