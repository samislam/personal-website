/*=============================================
  =            MergeInterfaces            =
  =============================================*/

type SharedKeys<T, U> = keyof T & keyof U

type OptionalShared<T, U> = {
  [K in SharedKeys<T, U>]?: T[K]
}

type WithoutShared<T, U> = {
  [K in Exclude<keyof T, SharedKeys<T, U>>]: T[K]
} & {
  [K in Exclude<keyof U, SharedKeys<T, U>>]: U[K]
}
/**
 * You can create a new type from two interfaces where shared properties are made optional, and the
 * remaining properties retain their original optional or required status by using this type
 *
 * @template T First interface
 * @template U Second interface
 */
export type MergeInterfaces<T, U> = OptionalShared<T, U> & WithoutShared<T, U>

/*=====  End of MergeInterfaces  ======*/
