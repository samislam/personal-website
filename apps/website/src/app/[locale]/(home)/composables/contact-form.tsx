'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { useTranslate } from '@tolgee/react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputField } from '@/components/common/input-field'
import { ContactFormFields, contactFormSchema } from '../schemas/contact-form.schema'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export const ContactForm = () => {
  const { t } = useTranslate()
  const form = useForm({ defaultValues: DEFAULT_VALUES, resolver: zodResolver(contactFormSchema) })
  const submitHandler = (data: ContactFormFields) => {
    console.table(data)
  }
  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle>{t('@t<contact-form-title>')}</CardTitle>
        <CardDescription>{t('@t<contact-form-description>')}</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(submitHandler)} className="space-y-6">
            <InputField
              name="fullName"
              control={form.control}
              label={t('@t<contact-form-fullName-label>')}
              errorMessage={form.formState.errors.fullName?.message}
              render={(field) => (
                <Input
                  required
                  placeholder={t('@t<contact-form-fullName-placeholder>')}
                  {...field}
                />
              )}
            />
            <InputField
              name="email"
              control={form.control}
              label={t('@t<contact-form-email-label>')}
              errorMessage={form.formState.errors.email?.message}
              render={(field) => (
                <Input
                  required
                  {...field}
                  type="email"
                  placeholder={t('@t<contact-form-email-placeholder>')}
                />
              )}
            />
            <InputField
              name="message"
              control={form.control}
              label={t('@t<contact-form-message-label>')}
              errorMessage={form.formState.errors.message?.message}
              render={(field) => (
                <Textarea
                  required
                  rows={4}
                  {...field}
                  placeholder={t('@t<contact-form-message-placeholder>')}
                />
              )}
            />
            <Button type="submit" className="btn-primary w-full">
              {t('@t<contact-form-primary-button-text>')}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

const DEFAULT_VALUES = {
  email: '',
  fullName: '',
  message: '',
} satisfies ContactFormFields
