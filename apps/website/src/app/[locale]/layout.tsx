import { PropsWithChildren } from 'react'
import { Footer } from '@/components/layouts/landing-layout/footer'
import { MainArea } from '@/components/layouts/landing-layout/main-area'

const Layout = (props: PropsWithChildren) => {
  const { children } = props
  return (
    <div>
      <MainArea>{children}</MainArea>
      <Footer />
    </div>
  )
}
export default Layout
