import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SpannedText } from '@repo/react-utils'
import { Settings, Clock, Mail } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { getTranslate } from '@/lib/tolgee/tolgee-server'
import appConfig from '@/config/app.config'

const Page = async () => {
  const t = await getTranslate()
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour12: true,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-50 via-white to-gray-100 p-6">
      <div className="w-full max-w-4xl space-y-8">
        {/* Main Maintenance Card */}
        <Card className="overflow-hidden border-0 bg-white/80 shadow-2xl backdrop-blur-sm">
          <CardContent className="p-0">
            <div className="relative">
              {/* Header with animated background */}
              <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 p-12 text-center text-white">
                <div className="absolute inset-0 bg-black/10" />
                <div className="relative z-10 space-y-6">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                    <Settings
                      className="h-10 w-10 animate-spin text-white"
                      style={{ animationDuration: '3s' }}
                    />
                  </div>
                  <div>
                    <h1 className="mb-4 text-4xl font-bold lg:text-5xl">
                      {t('@t<maintenance-page-title>')}
                    </h1>
                    <p className="mx-auto max-w-2xl text-xl opacity-90">
                      {t('@t<maintenance-page-description>')}
                    </p>
                  </div>
                  <Badge className="border-white/30 bg-white/20 px-4 py-2 text-white">
                    <Clock className="mr-2 h-4 w-4" />
                    <SpannedText
                      tolgeeKey="@t<maintenance-current-time-indicator>"
                      params={{
                        currentTime: formatTime(new Date()),
                      }}
                    />
                  </Badge>
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-8 p-12">
                {/* Estimated Time */}
                {/* <div className="rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 p-8 text-center">
                  <h3 className="mb-4 text-xl font-semibold text-gray-900">
                    Estimated Completion Time
                  </h3>
                  <div className="flex items-center justify-center gap-2 text-2xl font-bold text-blue-600">
                    <RefreshCw className="h-6 w-6" />
                    <span>2-4 Hours</span>
                  </div>
                  <p className="mt-2 text-gray-600">
                    We appreciate your patience during this maintenance window
                  </p>
                </div> */}

                {/* Contact Information */}
                <div className="space-y-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {t('@t<maintenance-page-contactInformationSection-title>')}
                  </h3>
                  <p className="text-gray-600">
                    {t('@t<maintenance-page-contactInformationSection-description>')}
                  </p>
                  <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Button className="bg-blue-600 text-white hover:bg-blue-700" asChild>
                      <a href="mailto:hello@yourname.com">
                        <Mail className="mr-2 h-4 w-4" />
                        {t('@t<maintenance-page-contact-button-text>')}
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="space-y-2 text-center text-sm text-gray-500">
          <p>{t('@t<maintenance-page-footer-text01>')}</p>
          <p>
            <SpannedText
              tolgeeKey="@t<maintenance-page-footer-text02>"
              params={{ authorName: appConfig.authorName }}
            />
          </p>
        </div>
      </div>
    </div>
  )
}
export default Page
