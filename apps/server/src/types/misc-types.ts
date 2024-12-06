import type { EntitySchema, MixedList } from 'typeorm'

export type EntitiesList = MixedList<string | (new (...args: any[]) => any) | EntitySchema<any>>
