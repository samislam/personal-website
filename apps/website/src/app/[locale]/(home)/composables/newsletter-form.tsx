'use client'

import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '@/components/ui/form'
import { useTranslate } from '@tolgee/react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputField } from '@/components/common/input-field'
import { NewsletterFormFields, newsletterFormSchema } from '../schemas/newsletter-form.schema'

export const NewsletterForm = () => {
  const { t } = useTranslate()
  const form = useForm({
    defaultValues: DEFAULT_VALUES,
    resolver: zodResolver(newsletterFormSchema),
  })

  const submitHandler = (data: NewsletterFormFields) => {
    console.table(data)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submitHandler)}
        className="mx-auto flex max-w-md items-center justify-center gap-4"
      >
        <InputField
          name="email"
          errorMessage={form.formState.errors.email?.message}
          control={form.control}
          className="flex-1"
          render={(field) => (
            <Input
              {...field}
              required
              type="email"
              placeholder={t('@t<newsletter-form-email-placeholder>')}
              className="border-white/20 bg-white/10 text-white placeholder:text-white/70 focus:border-white/40"
            />
          )}
        />
        <Button type="submit" variant="secondary">
          {t('@t<newsletter-form-primary-button-text>')}
        </Button>
      </form>
    </Form>
  )
}

const DEFAULT_VALUES = {
  email: '',
} satisfies NewsletterFormFields
