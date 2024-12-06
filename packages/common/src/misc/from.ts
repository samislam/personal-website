import { ValueTransformer } from 'typeorm'
/**
 * Since TypeORM requires the value transformer to include both the `to` & the `from` callbacks,
 * this funciton is used as a shorthand for ignoring the `to` callback. This simple utility function
 * is useful in the context of this DMA module; Because the rule says, you must never write directly
 * to the database of the dma and change it's tables and columns. Also this module never writes to
 * the database, instead it uses the DMA APIs to interact with it for the writing operations.
 */
export const from = <R = any, V = any>(fromFn: (val: V) => R): ValueTransformer => ({
  to: (val) => val,
  from: fromFn,
})
