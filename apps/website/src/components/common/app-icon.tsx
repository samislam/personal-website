import Link from 'next/link'
import Image from 'next/image'
import React, { SVGProps } from 'react'
import appConfig from '@/config/app.config'
import { pageDefs } from '@/config/pages.config'
import clsx from 'clsx'

const AppIcon = (props: SVGProps<SVGSVGElement> = {}) => {
  return (
    <Link href={pageDefs.home.href} className={clsx('flex items-center gap-2', props.className)}>
      <Image src={appConfig.appLogo} alt="logo" />
    </Link>
  )
}

export default AppIcon
