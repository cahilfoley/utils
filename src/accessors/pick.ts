import flatten from '../array/flatten'

/**
 *
 * Creates a new object containing only the properties of `object` that are specified in `keys`.
 *
 * @param object The base object that properties will be picked from
 * @param keys The keys to pick
 *
 * @category accessors
 *
 * @example
 * const original = { foo: 'hello', bar: 'world', baz: false, something: [1, 2, 3] }
 * const picked = pick(original, 'foo', 'something')
 *
 * console.log(picked) // { foo: 'hello', something: [1, 2, 3] }
 * console.log(Object.keys(picked)) // ['foo', 'something']
 *
 */
export default function pick<T extends Record<string, any>, U extends keyof T>(
  object: T,
  ...keys: U[]
): Pick<T, U>
export default function pick<T extends Record<string, any>, U extends keyof T>(
  object: T,
  keys: U[],
): Pick<T, U>
export default function pick<T extends Record<string, any>, U extends keyof T>(
  object: T,
  ...keys: U[] | [U[]]
): Pick<T, U> {
  const resolvedKeys = flatten(keys)

  const output = resolvedKeys.reduce(
    (output, key) => {
      output[key] = object[key]
      return output
    },
    {} as T,
  )

  return output as Pick<T, U>
}
