import { exclude } from '@/misc/exclude'

describe('exclude() utility function', () => {
  it('should return items from array that are not in the exclude keys list', () => {
    const array = ['apple', 'banana', 'cherry', 'date']
    const keys = ['banana', 'date']

    const result = exclude(array, keys)

    expect(result).toEqual(['apple', 'cherry'])
  })

  it('should return an empty array when all items are in the exclude keys list', () => {
    const array = ['apple', 'banana', 'cherry']
    const keys = ['apple', 'banana', 'cherry']

    const result = exclude(array, keys)

    expect(result).toEqual([])
  })

  it('should return the same array when the exclude keys list is empty', () => {
    const array = ['apple', 'banana', 'cherry']
    const keys: string[] = []

    const result = exclude(array, keys)

    expect(result).toEqual(array)
  })

  it('should return an empty array when the input array is empty', () => {
    const array: string[] = []
    const keys = ['banana', 'date']

    const result = exclude(array, keys)

    expect(result).toEqual([])
  })

  it('should handle cases where keys are duplicated (filter them out all)', () => {
    const array = ['apple', 'banana', 'cherry', 'banana']
    const keys = ['banana']

    const result = exclude(array, keys)

    expect(result).toEqual(['apple', 'cherry'])
  })

  it('should handle cases where keys include items not in the array (ignores them)', () => {
    // ^ important: normally this is protected by TypeScript.
    const array = ['apple', 'banana', 'cherry']
    const keys = ['date', 'fig']

    const result = exclude(array, keys)

    expect(result).toEqual(array)
  })
})
