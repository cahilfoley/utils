import get from '../accessors/get'

/**
 *
 * Updates an item in an array and returns a new array
 *
 * @param array The array to update
 * @param query A map of property paths (period delimited string) to values used to test if an object should be updated,
 * the paths are used in the get function
 * @param updateCallback A callback used to update the item
 * @return The array with the updated item
 *
 * @category array
 *
 */
export default function updateItem(
  array: object[],
  query: object,
  updateCallback: (item: any) => any,
): object[] {
  // Loop through all of the items
  const updatedArray = array.map(item => {
    // Assume it's a match
    let match = true

    // If any of the query
    Object.entries(query).forEach(([path, value]) => {
      if (get(item, path) !== value) {
        match = false
      }
    })

    // If it met all query criteria then call the update callback
    if (match) {
      return updateCallback(item)
    }

    // Otherwise don't modify the item
    return item
  })

  return updatedArray
}
