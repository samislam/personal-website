'use client'
import { SWRConfig } from 'swr'
import { ComponentProps } from 'react'

export const SWRProvider = (props: ComponentProps<typeof SWRConfig>) => {
  return <SWRConfig {...props} />
}
