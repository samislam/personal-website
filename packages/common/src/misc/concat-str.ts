/**
 * Concatinates multiple strings together, used when printing a long string, so it can be splitted
 * into multiple lines by prettier.
 */
export const concatStr = (...strings: string[]): string => strings.join(' ')
