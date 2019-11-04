/**
 * @module accessors
 */

import arrayAccessor from '../internal/patterns/arrayAccessor'

/**
 *
 * Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.
 *
 * @param object The object to query
 * @param path The path of the property to get
 * @param defaultValue The value returned for undefined resolved values
 * @return The value if it exists, if not then either the default value is returned or undefined
 *
 */
export default function get(object: object, path: string[] | string, defaultValue?: any): any {
  // If the path was a string, split it by periods
  if (typeof path === 'string') path = path.replace(arrayAccessor, '.$1').split('.')

  const nextKey = path.shift()

  // Up to the last section of the path, get the value now
  if (path.length === 0) return object[nextKey] || defaultValue

  // If the next key isn't an object then we can't read it
  if (!object[nextKey] || typeof object[nextKey] !== 'object') return defaultValue

  // Call get recursively with the next section of the path
  return get(object[nextKey], path, defaultValue)
}
