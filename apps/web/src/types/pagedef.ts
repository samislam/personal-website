import { MdiIcon } from '@/components/ui/material-icon'

export interface PageDef {
  href: string
  title?: string
  label: string
  /** You can find more icons at: https://pictogrammers.com/library/mdi/ */
  icon?: MdiIcon
}

export type PagesDefs = { [k: string]: PageDef }
