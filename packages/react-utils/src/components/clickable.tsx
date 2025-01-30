import { cn } from '@/utils/cn'
import React, { HTMLAttributes } from 'react'

export const Clickable = (props: HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...rest } = props
  const x = cn()
  return (
    <button className="rounded bg-pink-500 px-4 py-2 text-white transition-transform duration-300 focus:outline-none active:scale-110">
      Click Me
    </button>
  )
}
