[@cahil/utils](../README.md) › [Globals](../globals.md) › ["transforms/getAcronym"](_transforms_getacronym_.md)

# External module: "transforms/getAcronym"

## Index

### Functions

* [getAcronym](_transforms_getacronym_.md#getacronym)

## Functions

###  getAcronym

▸ **getAcronym**(`title`: string): *string*

*Defined in [src/transforms/getAcronym.ts:23](https://github.com/cahilfoley/utils/blob/22bd396/src/transforms/getAcronym.ts#L23)*

Condense a provided string into a 2 or 3 letter acronym using the following rules
- If there is only a single word return the first 3 letters
- If there are more than 3 words filter out articles, conjunctions and short prepositions

**`example`** 
```typescript

const acronym = getAcronym('Empire Strikes Back') // => 'ESB'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`title` | string | The string to convert to an acronym |

**Returns:** *string*

Returns the acronym string
