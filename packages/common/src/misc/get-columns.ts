import { Repository } from 'typeorm'
import { ExtractEntity } from '../type-helpers/extract-entity'
import { ColumnMetadata } from 'typeorm/metadata/ColumnMetadata'

/**
 * This function is used to get the columns metadata and column names from a typeorm repository,
 * it's useful when you want for example to query with the find method when using the `select` flag
 */
export const getColumns = <E extends object, T extends Repository<E> = Repository<E>>(
  repo: T,
  excludeNotSelected = false
) => {
  let columns: ColumnMetadata[] = repo.metadata.columns
  if (excludeNotSelected) columns = columns.filter((col) => col.isSelect)
  return {
    columns,
    get names() {
      type InferredE = ExtractEntity<T>
      return columns.map((col) => col.propertyName as keyof InferredE)
    },
  }
}
