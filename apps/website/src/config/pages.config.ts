import { PageDef } from '@/types/pagedef'

export const pageDefs = {
  home: {
    label: '@t<home>',
    icon: 'mdi:mdiHome',
    href: '/',
  },
} as const satisfies { [k: string]: PageDef }
