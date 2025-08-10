import { Input } from '../ui/input'
import { cn } from '@repo/react-utils'
import React, { useState } from 'react'
import { InputProps } from '@/components/ui/input'
import { withConditionals } from 'conditionalize-component'
import { EyeClosedIcon, EyeIcon, LockIcon } from 'lucide-react'

const EyeOpenIconC = withConditionals(EyeIcon)
const EyeClosedIconC = withConditionals(EyeClosedIcon)

export type PasswordFieldProps = {
  value: string
  defaultShow?: boolean
  inputProps?: InputProps
  onChange: (val: string) => void
}

export const PasswordField = (props: PasswordFieldProps) => {
  const { defaultShow = false, inputProps, onChange, value } = props
  const [showPassword, setShowPassword] = useState(defaultShow)
  const togglePasswordVisibility = () => setShowPassword((state) => !state)
  return (
    <div className="relative">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
        <LockIcon className="h-4 w-4 text-gray-400" />
      </div>
      <Input
        {...inputProps}
        value={value}
        type={showPassword ? 'text' : 'password'}
        onChange={(e) => onChange(e.target.value)}
        className={cn(
          'border-input/50 pl-10 transition-all focus:border-green-500',
          inputProps?.className
        )}
        endAction={
          <div>
            <EyeClosedIconC
              className="clickable h-4 w-4 text-gray-600"
              renderIf={showPassword}
              onClick={togglePasswordVisibility}
            />
            <EyeOpenIconC
              className="clickable h-4 w-4 text-gray-600"
              renderIf={!showPassword}
              onClick={togglePasswordVisibility}
            />
          </div>
        }
      />
    </div>
  )
}
