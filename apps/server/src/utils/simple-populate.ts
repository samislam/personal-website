import { ObjectLiteral, SelectQueryBuilder } from 'typeorm'

/**
 * Dynamically applies left joins to a TypeORM query builder based on a list of requested `populate`
 * fields.
 *
 * This utility ensures that only allowed relations (defined in `allowedFields`) are joined, and
 * constructs join paths using a base query alias (e.g., "provider.supplier").
 *
 * @example
 *   simplePopulate(qb, ['supplier'], ['supplier'], 'provider')
 *   // results in: qb.leftJoinAndSelect('provider.supplier', 'supplier')
 *
 * @template Entity - The entity type used in the query builder.
 * @param qb - The TypeORM `SelectQueryBuilder` instance for the primary entity.
 * @param populate - An array of relation field names (e.g., ['supplier', 'createdBy']) requested to
 *   be populated.
 * @param allowedFields - A readonly list of safe, predefined fields allowed to be populated.
 * @param alias - The root alias used in the query builder (e.g., 'provider').
 * @returns The original query builder with the appropriate joins applied.
 */
export function simplePopulate<Entity extends ObjectLiteral>(
  qb: SelectQueryBuilder<Entity>,
  populate: string[] = [],
  allowedFields: readonly string[],
  alias: string
) {
  for (const field of populate) {
    if (allowedFields.includes(field)) {
      qb.leftJoinAndSelect(`${alias}.${field}`, field)
    }
  }
  return qb
}
