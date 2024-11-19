import { PageDef } from '@/types/pagedef'

// # You can find more icons at: https://pictogrammers.com/library/mdi/

export const pageDefs = {
  home: {
    label: '@t<home>',
    icon: 'mdiHome',
    href: '/',
  },
  login: {
    label: '@t<login>',
    icon: 'mdiLogin',
    href: '/auth/login',
  },
} as const satisfies { [k: string]: PageDef }
