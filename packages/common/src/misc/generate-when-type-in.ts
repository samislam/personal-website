/**
 * Generates a whenTypeIn callback function that can be used in the DTOs validations when checking
 * if the discriminator is one of x values
 *
 * @example
 *   // generate the whenTypeIn callback function
 *   const whenModeType = generateWhenTypeIn<DmaCreateApDto, AccessModeEnums>('accessMode');
 *   // use it
 *   class CreateApDto {
 *   _@ExcludeIf<_>(whenModeType('is-not', ['snmp_+5', 'snmp_-5']))
 *   community?: string;
 *   }
 *
 * @template O The Dto class type
 * @template E The enums type
 */
export const generateWhenTypeIn =
  <O, E extends string>(typePropertyKey: keyof O) =>
  (verb: Verbs, types: E[]) =>
  (object: O): boolean => {
    const includes = types.includes(object[typePropertyKey] as E)
    return verb === 'is' ? includes : !includes
  }
export type Verbs = 'is' | 'is-not'
