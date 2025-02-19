import clsx from 'clsx'
import React from 'react'
import { cn } from '../utils/cn'
import { LibIcon, LibraryIcon } from './lib-icon'

export interface LoadingProps {
  label?: string
  className?: string
  iconClassName?: string
  labelClassName?: string
  loadingIcon?: LibraryIcon
}
export const Loading = (props: LoadingProps) => {
  const { label, className, loadingIcon = 'lucide:RefreshCcwIcon' } = props
  const { iconClassName, labelClassName } = props
  return (
    <div
      className={clsx(
        'flex flex-col items-center justify-center',
        { 'gap-y-2': !!label },
        className
      )}
    >
      <LibIcon icon={loadingIcon} className={cn('animate-spin', iconClassName)} />
      <span className={cn('font-bold', labelClassName)}>{label}</span>
    </div>
  )
}
