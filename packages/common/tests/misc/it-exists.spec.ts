import { itExists } from '@/misc/it-exists'

describe('itExists() utility function', () => {
  it('considers (undefined) non-existent', () => expect(itExists({}, undefined)).toBe(false))
  it('considers (null) non-existent', () => expect(itExists({}, null)).toBe(false))
  it('considers ("") empty string non-existent', () => expect(itExists({}, '')).toBe(false))
  it('considers (false) to be existent', () => expect(itExists({}, false)).toBe(true))
  it('considers (0) to be existent', () => expect(itExists({}, 0)).toBe(true))
  it('considers ([]) to be existent', () => expect(itExists({}, [])).toBe(true))
})
