/** Regex pattern to split the camel case section into it's parts */
const splitCamelCase = /[a-z]+|[0-9]+|(?:[A-Z][a-z]+)|([A-Z]+(?=(?:[A-Z][a-z])|[^A-Za-z]|[$\d\n]|\b))/g

export default splitCamelCase
