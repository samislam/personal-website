/**
 * This is a simple function used with the decorator `@ValidateIf(itExists)` considers only the
 * null, undefined and ("") empty string values to be non-existent
 */
export const itExists = (_: object, val: any) => (val === false || val === 0 ? true : !!val)
