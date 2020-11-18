[@cahil/utils](../README.md) › [Globals](../globals.md) › [validation](validation.md)

# External module: validation

## Index

### Functions

* [isNonEmptyString](validation.md#isnonemptystring)

## Functions

###  isNonEmptyString

▸ **isNonEmptyString**(`text`: string): *boolean*

*Defined in [src/validation/isNonEmptyString.ts:20](https://github.com/cahilfoley/utils/blob/22bd396/src/validation/isNonEmptyString.ts#L20)*

Checks if a value provided is of type string and has a non-zero length. If the value is not a string
or it is an empty string then the function returns false

**`example`** 
```typescript

const valid = isNonEmptyString('hello') // => true
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | The text to validate |

**Returns:** *boolean*

True if the value is an empty string, false otherwise
