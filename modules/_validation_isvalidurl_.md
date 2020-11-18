[@cahil/utils](../README.md) › [Globals](../globals.md) › ["validation/isValidURL"](_validation_isvalidurl_.md)

# External module: "validation/isValidURL"

## Index

### Functions

* [isValidURL](_validation_isvalidurl_.md#isvalidurl)

## Functions

###  isValidURL

▸ **isValidURL**(`text`: string): *boolean*

*Defined in [src/validation/isValidURL.ts:22](https://github.com/cahilfoley/utils/blob/22bd396/src/validation/isValidURL.ts#L22)*

Checks if a value provided is of type string and is a valid URL. If the value is not a string
or it is an empty string then the function returns false

**`example`** 
```typescript

const valid = isValidURL('http://www.google.com') // returns true
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | The text to validate |

**Returns:** *boolean*

Returns true if the input is a valid URL otherwise returns false
