'use client'

import { T } from '@tolgee/react'
import React from 'react'

export const FooterLastLine = () => {
  return (
    <p className="text-gray-400">
      <T
        keyName={'@t<footer-last-line>'}
        params={{
          year: new Date().getFullYear(),
          Brackets: (children) => <>&lt;{children}&gt;</>,
        }}
      />
    </p>
  )
}
