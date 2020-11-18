[@cahil/utils](../README.md) › [Globals](../globals.md) › [transforms](transforms.md)

# External module: transforms

## Index

### Functions

* [capitalize](transforms.md#capitalize)
* [noramlizeURL](transforms.md#noramlizeurl)
* [toProperList](transforms.md#toproperlist)

## Functions

###  capitalize

▸ **capitalize**(`text`: string): *string*

*Defined in [src/transforms/capitalize.ts:19](https://github.com/cahilfoley/utils/blob/22bd396/src/transforms/capitalize.ts#L19)*

Capitalize the first letter of a string

**`example`** 
```typescript

const name = capitalize('bob') // => 'Bob'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`text` | string | The string to be capitalized |

**Returns:** *string*

Returns the capitalized string

___

###  noramlizeURL

▸ **noramlizeURL**(...`urlParts`: string[]): *string*

*Defined in [src/transforms/normalizeURL.ts:62](https://github.com/cahilfoley/utils/blob/22bd396/src/transforms/normalizeURL.ts#L62)*

Sanitises and safely joins sections of a URL, this includes removing duplicate slashes in the path and
ensuring correctly formatted protocols.

**`example`** 
```typescript

const url = normalizeURL('https://cahilfoley.github.io/', '/utils') // => 'https://cahilfoley.github.io/utils'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...urlParts` | string[] | The URL parts to be joined and normalized |

**Returns:** *string*

Returns the joined and normalized URL parts as a string

___

###  toProperList

▸ **toProperList**(`items`: string[]): *string*

*Defined in [src/transforms/toProperList.ts:19](https://github.com/cahilfoley/utils/blob/22bd396/src/transforms/toProperList.ts#L19)*

Joins together several strings or numbers in a properly formatted English list. The last two items are seperated by the word
'and' and the remaining items are seperated by a comma and space.

**`example`** 
```typescript

const itemsString = toProperList(['apples', 'pears', 'bananas']) // => 'apples, pears and bananas'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`items` | string[] | Array of strings  |

**Returns:** *string*

▸ **toProperList**(...`items`: string[]): *string*

*Defined in [src/transforms/toProperList.ts:20](https://github.com/cahilfoley/utils/blob/22bd396/src/transforms/toProperList.ts#L20)*

**Parameters:**

Name | Type |
------ | ------ |
`...items` | string[] |

**Returns:** *string*
