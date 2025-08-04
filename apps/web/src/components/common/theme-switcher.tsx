'use client'

import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [value, setValue] = useState<string>()

  const handleChange = (value: string) => {
    setTheme(value)
    // ... Your logic to server actions
  }

  useEffect(() => {
    setValue(theme)
  }, [value, theme])

  return (
    <ToggleGroup type="single" value={value} onValueChange={handleChange}>
      <ToggleGroupItem value="dark" aria-label="Dark">
        <MoonIcon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="light" aria-label="Light">
        <SunIcon className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  )
}
