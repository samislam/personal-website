import { PropsWithChildren } from 'react'
import appConfig from '@/config/app.config'
import { Footer } from '@/components/layouts/landing-layout/footer'
import { MainArea } from '@/components/layouts/landing-layout/main-area'

const Layout = (props: PropsWithChildren) => {
  const { children } = props
  if (appConfig.enableMaintenanceMode) return <>Maintainance</>
  return (
    <div>
      <MainArea>{children}</MainArea>
      <Footer />
    </div>
  )
}
export default Layout
