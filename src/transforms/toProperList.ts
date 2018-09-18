/**
 *
 * Accepts an array of strings and returns a formatted list in proper English.
 *
 * @param items Array of strings
 *
 * @category transforms
 *
 * @example const itemsString = toProperList(['apples', 'pears', 'bananas']) // => 'apples, pears and bananas'
 *
 */
const toProperList = (...items: string[]): string => {
  let itemsString = ""
  let length = items.length
  // If you have only one item in the array
  if(length === 1) {
    itemsString = items[0]
  }
  // If you have only tow items in the array
  else if(length === 2) {
    itemsString = `${items[0]} and ${items[1]}`
  }
  // If you have 3 or more items in the array, 
  else if(length >= 3){
    // It traverses all elements of the array adds the fixed dots according to the English language
    items.forEach((item, index) => {
      // If it is the penultimate array item
      if(index === length-2) {
        itemsString += `${item} and `
      }
      // If it is the last item in the array
      else if (index === length-1) {
        itemsString += `${item}`
      }
      // If it is the first or some element before the penultimate one
      else {
        itemsString += `${item}, `
      }
    })
  }

  return itemsString
}

export default toProperList