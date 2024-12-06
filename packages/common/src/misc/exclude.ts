/** Filter from an array selected items */
export const exclude = <
  T extends readonly string[],
  K extends readonly T[number][] = readonly T[number][],
>(
  array: T,
  keys: K
): Exclude<T[number], K[number]>[] => {
  return array.filter((item): item is Exclude<T[number], K[number]> => !keys.includes(item))
}
