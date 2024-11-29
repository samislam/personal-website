import { PageDef } from '@/types/pagedef'

export const pageDefs = {
  home: {
    label: '@t<home>',
    icon: 'mdi:mdiHome',
    href: '/',
  },
  login: {
    label: '@t<login>',
    icon: 'mdi:mdiLogin',
    href: '/auth/login',
  },
} as const satisfies { [k: string]: PageDef }
