import { PagesDefs } from '@/types/pagedef'
import { getTranslate } from '@/lib/tolgee/tolgee-server'

export const translatePageDefs = async <T extends PagesDefs>(pageDefs: T): Promise<T> => {
  const t = await getTranslate()
  const translatedDefs: PagesDefs = {}

  for (const [key, value] of Object.entries(pageDefs)) {
    translatedDefs[key] = {
      ...value,
      label: t(value.label),
      title: value.title ? t(value.title) : undefined,
    }
  }

  return translatedDefs as T
}
