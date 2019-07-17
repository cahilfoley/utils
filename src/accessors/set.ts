/**
 * @module accessors
 */

import arrayAccessor from '../internal/patterns/arrayAccessor'

/**
 *
 * Sets the value at path of object. If a portion of path doesn't exist, it's created. Arrays are created for missing
 * index properties while objects are created for all other missing properties.
 *
 * @param object The object to modify
 * @param path The path of the property to set
 * @param value The value to set
 *
 */
export default function set(
  object: Record<string, any> | any[],
  path: string[] | string,
  value: any,
): void {
  // If the path was a string, split it by periods and array accessors
  if (typeof path === 'string') {
    path = path.replace(arrayAccessor, '.$1').split('.')
  }

  // Next key to access
  let next: string | number = path.shift()

  // Still got more steps to go
  if (path.length) {
    // If the next path item is a number then the item we are about to enter is an array
    if (!Number.isNaN(+path[0])) {
      // If the next item isn't already an array then create it
      if (!Array.isArray(object[next])) object[next] = []
    }
    // If the next key isn't an object - make it one
    else if (!object[next] || typeof object[next] !== 'object') {
      object[next] = {}
    }

    // Call set recursively with the next section of the path
    set(object[next], path, value)
  } else {
    // Up to the last sectino of the path, set the value now
    object[next] = value
  }
}
