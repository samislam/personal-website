import React, { PropsWithChildren } from 'react'

export const MainArea = (props: PropsWithChildren) => {
  const { children } = props
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-100">
      {children}
    </div>
  )
}
