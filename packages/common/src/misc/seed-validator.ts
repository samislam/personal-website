import { plainToInstance } from 'class-transformer'
import { validateSync } from 'class-validator'

/**
 * Validates seed input using class-validator and exits the process on failure.
 *
 * @param data Raw seed input array (typically from JSON)
 * @param dtoClass The DTO class to transform and validate against
 * @param entityName Optional entity name for better error logging
 * @returns The validated, transformed DTO instances
 */
export function seedValidator<T extends object>(
  data: unknown[],
  dtoClass: new () => T,
  entityName = 'Entry'
): T[] {
  const instances = plainToInstance(dtoClass, data)
  const errors = instances
    .map((item, i) => ({ i, errors: validateSync(item) }))
    .filter(({ errors }) => errors.length > 0)

  if (errors.length > 0) {
    console.error(`❌ Validation failed for ${entityName}:`)
    for (const { i, errors: errs } of errors) {
      console.error(`  ${entityName} #${i + 1}:`, errs)
    }
    process.exit(1)
  }

  return instances
}
