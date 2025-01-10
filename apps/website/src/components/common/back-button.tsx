'use client'
import { cn } from '@/lib/utils'
import { Button } from '../ui/button'
import { useRouter } from 'next/navigation'
import React, { ComponentProps } from 'react'

export const BackButton = (props: ComponentProps<typeof Button>) => {
  const { children, className, onClick, ...rest } = props
  const router = useRouter()
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    router.back()
    onClick?.(e)
  }
  return (
    <Button
      onClick={handleClick}
      className={cn(
        'group flex items-center space-x-2 rounded-lg',
        'bg-white/10 px-6 py-6 text-white transition-colors hover:bg-white/20',
        className
      )}
      {...rest}
    >
      {children}
    </Button>
  )
}
