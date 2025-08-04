/** Utility type to define a constructor type */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T = object> = new (...args: any[]) => T

/** Utility type to make all properties of a class optional */
type Optional<T> = {
  [P in keyof T]?: T[P]
}

/**
 * A TypeScript helper function that takes in a class, and makes all its properties optional
 * (<.ORIGINAL_TYPE> + **| undefined**)
 */
export function OptionalizeClass<T extends Constructor>(Base: T) {
  return class extends Base {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any[]) {
      super(...args)
    }
  } as unknown as Constructor<Optional<InstanceType<T>>>
}
