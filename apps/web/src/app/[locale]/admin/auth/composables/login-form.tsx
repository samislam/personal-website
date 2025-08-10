'use client'

import React, { useRef } from 'react'
import { useTranslate } from '@tolgee/react'
import { useMutation } from '@tanstack/react-query'
import { LoadingButton } from '@/components/ui/loading-button'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { UserIcon, ShieldIcon, AlertCircleIcon } from 'lucide-react'
import { LoginFormBase, LoginFormBaseProps } from './login-form-base'
import { login } from '@/app/[locale]/admin/auth/actions/login.client-action'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { FormMethods } from '@repo/react-utils'

export const LoginForm = () => {
  const { t } = useTranslate()
  const { mutate, isPending, isError, error } = useMutation({
    mutationKey: ['$USER'],
    mutationFn: login,
  })

  const handleSubmit: LoginFormBaseProps['onSubmit'] = (data) => {
    console.log(data)
    mutate(data)
  }

  const formRef = useRef<FormMethods>(null)

  return (
    <Card className="border-0 bg-white/80 shadow-2xl backdrop-blur-sm">
      <CardHeader className="space-y-4 pb-8 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-800 shadow-lg">
          <ShieldIcon className="h-8 w-8 text-white" />
        </div>
        <div>
          <CardTitle className="text-2xl font-bold text-gray-900">
            {t('@t<loginForm-card-title>')}
          </CardTitle>
          <CardDescription className="mt-2 text-gray-600">
            {t('@t<loginForm-card-description>')}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent className="space-y-6">
        {isError && (
          <Alert className="border-red-200 bg-red-50">
            <AlertCircleIcon className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-700">{error.message}</AlertDescription>
          </Alert>
        )}

        <div className="space-y-3">
          <LoginFormBase ref={formRef} onSubmit={handleSubmit} />
          <LoadingButton
            type="submit"
            loading={isPending}
            loadingText={t('@t<processing>')}
            onClick={() => formRef.current?.submit()}
            className="h-12 w-full bg-gradient-to-r from-blue-600 to-blue-800 font-medium text-white shadow-lg transition-all duration-200 hover:from-blue-700 hover:to-blue-900"
          >
            <div className="flex items-center gap-2">
              <UserIcon className="h-4 w-4" />
              {t('@t<loginForm-primary-button-text>')}
            </div>
          </LoadingButton>
        </div>
      </CardContent>
    </Card>
  )
}
