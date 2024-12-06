import { pick } from '@/misc/pick'

describe('pick() utility function', () => {
  it('should return only the items present in both array and keys', () => {
    const array = ['apple', 'banana', 'cherry', 'date']
    const keys = ['banana', 'date']

    const result = pick(array, keys)

    expect(result).toEqual(['banana', 'date'])
  })

  it('should return an empty array when no items match', () => {
    const array = ['apple', 'banana', 'cherry', 'date']
    const keys = ['orange', 'grape']

    const result = pick(array, keys)

    expect(result).toEqual([])
  })

  it('should return an empty array when the input array is empty', () => {
    const array: string[] = []
    const keys = ['banana', 'date']

    const result = pick(array, keys)

    expect(result).toEqual([])
  })

  it('should return an empty array when keys are empty', () => {
    const array = ['apple', 'banana', 'cherry', 'date']
    const keys: string[] = []

    const result = pick(array, keys)

    expect(result).toEqual([])
  })

  it('should handle duplicate items in the array (keep them)', () => {
    const array = ['apple', 'banana', 'banana', 'cherry', 'date']
    const keys = ['banana', 'date']

    const result = pick(array, keys)

    expect(result).toEqual(['banana', 'banana', 'date'])
  })

  it('should handle cases where keys are duplicated (ignores them)', () => {
    const array = ['apple', 'banana', 'cherry', 'date']
    const keys = ['banana', 'banana', 'date', 'date']

    const result = pick(array, keys)

    expect(result).toEqual(['banana', 'date'])
  })
})
