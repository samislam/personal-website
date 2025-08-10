import { ArrowLeftIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SpannedText } from '@repo/react-utils'
import { pageDefs } from '@/config/pages.config'
import { Link } from '@/lib/next-intl/navigation'
import { getTranslate } from '@/lib/tolgee/tolgee-server'
import { LoginForm } from '@/app/[locale]/admin/auth/composables/login-form'

const Page = async () => {
  const t = await getTranslate()
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-gray-100 p-6">
      {/* <FloatingLanguageSwitcher position="top" /> */}
      <div className="w-full max-w-md space-y-6">
        {/* Back to Portfolio Link */}
        <div className="text-center">
          <Link href={pageDefs.home.href}>
            <Button variant="ghost" className="gap-2 text-slate-600 hover:text-slate-900">
              <ArrowLeftIcon className="h-4 w-4" />
              {t('@t<login-page-backToPortfolio-button-text>')}
            </Button>
          </Link>
        </div>

        <LoginForm />

        {/* Security Notice */}
        <div className="text-center text-sm text-gray-500">
          <p>{t('@t<login-page-securityNoticeLine-title>')}</p>
          <p className="mt-1">
            <SpannedText
              tolgeeKey="@t<login-page-securityNoticeLine-description>"
              params={{ year: new Date().getFullYear() }}
            />
          </p>
        </div>
      </div>
    </div>
  )
}
export default Page
