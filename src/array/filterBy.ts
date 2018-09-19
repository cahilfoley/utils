import get from '../accessors/get'

/**
 *
 *  Allows filtering of an array by querying a property with a getter path instead of a callback function.
 *
 * @param array The array of object to filter
 * @param path The path of the property to filter
 * @param value The value of the property to filter
 * @return Array filtered according to property and past value
 *
 * @category array
 *
 */
export default function filterBy(array: object[], path: string | string[], value: any): object[] {
  let result: object[] = array.filter((element) => {
    let copyPath = path

    if(typeof path !== "string") {
      // If the path is an array, it copies the value because the get function modifies it
      copyPath = [...path]
    }
    // Attempts to fetch past property value
    const tryGet = get(element, copyPath)
    // Compares the returned value of the get function and the value fetched
    return tryGet !== undefined && tryGet === value
  })
  return result
}