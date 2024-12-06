/** Pick from an array selected items */
export const pick = <const T extends string[]>(array: T, keys: T[number][]) => {
  return array.filter((item) => keys.includes(item))
}
