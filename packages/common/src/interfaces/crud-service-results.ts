export type FindServiceResult<T extends object> = T[]

export type FindByIdServiceResult<T extends object> = T
export interface CreateServiceResult<T extends object> {
  createdItem: T
  createdItemId: string
}
export interface UpdateByIdServiceResult<T extends object> {
  previousEntry: T
  newEntry: T
  entryId: string
}
export interface DeleteByIdServiceResult<T extends object> {
  deletedItem: T
  deletedItemId: string
}
