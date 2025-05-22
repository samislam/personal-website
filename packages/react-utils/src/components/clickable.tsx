import { cn } from '@/utils/cn'
import React, { HTMLAttributes } from 'react'

export const Clickable = (props: HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...rest } = props
  return (
    <div
      {...rest}
      className={cn(
        'transition-transform duration-300 focus:outline-none active:scale-110 cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  )
}
