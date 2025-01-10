import { LanguageSwitcher } from '@/components/common/language-switcher'
import { ThemeSwitcher } from '@/components/common/theme-switcher'

const Page = async () => {
  return (
    <div className="flex h-screen min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="font-serif text-4xl font-bold">Nexst template website</h1>
      <LanguageSwitcher />
      <ThemeSwitcher />
    </div>
  )
}
export default Page
