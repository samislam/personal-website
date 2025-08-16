import { PropsWithChildren } from 'react'
import appConfig from '@/config/app.config'
import MaintenancePage from './maintenance'

const Layout = (props: PropsWithChildren) => {
  const { children } = props
  if (appConfig.enableMaintenanceMode) return <MaintenancePage />
  else return children
}
export default Layout
