import { getTranslate } from '@/lib/tolgee/tolgee-server'
import { ThemeSwitcher } from '@/components/common/theme-switcher'
import { LanguageSwitcher } from '@/components/common/language-switcher'

const Page = async () => {
  const t = await getTranslate()
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center space-y-3">
      <h1 className="text-4xl font-bold">Nexst starter</h1>
      <div>{t('@t<starter-description>')}</div>
      <LanguageSwitcher />
      <div>{t('@t<change-theme>')}</div>
      <ThemeSwitcher />
    </div>
  )
}
export default Page
