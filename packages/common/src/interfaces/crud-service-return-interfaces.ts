export type FindServiceReturnType<T extends object> = T[]

export type FindByIdServiceReturnType<T extends object> = T
export interface CreateServiceReturnType<T extends object> {
  createdItem: T
  createdItemId: string
}
export interface UpdateByIdServiceReturnType<T extends object> {
  previousEntry: T
  newEntry: T
  entryId: string
}
export interface DeleteByIdServiceReturnType<T extends object> {
  deletedItem: T
  deletedItemId: string
}
