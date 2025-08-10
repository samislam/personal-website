import React from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { useTranslate } from '@tolgee/react'
import { Input } from '@/components/ui/input'
import { createForm } from '@repo/react-utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputField } from '@/components/common/input-field'
import { LoginFields, loginSchema } from '../schemas/login.schema'
import { PasswordField } from '@/components/common/password-field'

export const LoginFormBase = createForm<LoginFormBaseProps>((props, ref) => {
  const { onSubmit, initialValues } = props
  const { t } = useTranslate()
  const form = useForm({
    defaultValues: { ...DEFAULT_VALUES, ...initialValues },
    resolver: zodResolver(loginSchema),
  })

  return (
    <Form {...form}>
      <form ref={ref} onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-3">
          <InputField
            name="email"
            control={form.control}
            label={t('@t<loginFormBase-email-label>')}
            className="font-medium text-gray-700 [&_[data-slot=label]]:text-sm"
            errorMessage={form.formState.errors.email?.message}
            render={(field) => (
              <Input
                {...field}
                type="email"
                icon="lucide:MailIcon"
                iconClassName="h-4 w-4 text-gray-400"
                placeholder={t('@t<loginFormBase-email-placeholder>')}
                className="h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              />
            )}
          />

          <InputField
            name="password"
            control={form.control}
            label={t('@t<loginFormBase-password-label>')}
            className="font-medium text-gray-700 [&_[data-slot=label]]:text-sm"
            errorMessage={form.formState.errors.password?.message}
            render={(field) => (
              <PasswordField
                {...field}
                inputProps={{
                  placeholder: t('@t<loginFormBase-password-placeholder>'),
                  className: 'h-12 border-gray-200 focus:border-blue-500 focus:ring-blue-500',
                }}
              />
            )}
          />
          <div className="flex w-full items-end justify-end">
            <Link
              href="/admin/auth/forgot-password"
              className="text-blue-600 transition-colors hover:text-blue-800"
            >
              {t('@t<loginFormBase-forgotPassword-text>')}
            </Link>
          </div>
        </div>
      </form>
    </Form>
  )
})

export interface LoginFormBaseProps {
  onSubmit: (data: LoginFields) => void
  initialValues?: Partial<LoginFields>
}

const DEFAULT_VALUES: LoginFields = {
  email: '',
  password: '',
}
