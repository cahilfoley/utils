[@cahil/utils](../README.md) › [Globals](../globals.md) › [array](array.md)

# External module: array

## Index

### Functions

* [flatten](array.md#flatten)
* [partitionArray](array.md#partitionarray)

## Functions

###  flatten

▸ **flatten**<**T**>(`array`: T | T[] | T[][][], `depth`: number): *T[]*

*Defined in [src/array/flatten.ts:22](https://github.com/cahilfoley/utils/blob/22bd396/src/array/flatten.ts#L22)*

Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.

**`example`** 
```typescript

flatten<number>([1, [2, 3], 4, [5, [6, 7] ], 8])
// Expected output: [1, 2, 3, 4, 5, 6, 7, 8]
```

**Type parameters:**

▪ **T**

The type of the items in the array, specify this type parameter to avoid type widening on deeply nested arrays

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`array` | T &#124; T[] &#124; T[][][] | - | The array to be flattened. |
`depth` | number |  Infinity | The depth level specifying how deep a nested array structure should be flattened. Defaults to `Infinity`. |

**Returns:** *T[]*

The flattened array.

___

###  partitionArray

▸ **partitionArray**<**T**>(`array`: T[], `predicate`: function, `context?`: any): *[T[], T[]]*

*Defined in [src/array/partitionArray.ts:24](https://github.com/cahilfoley/utils/blob/22bd396/src/array/partitionArray.ts#L24)*

Partitions an array using a provided predicate function. All elements satisfying the predicate are part of the first returned array,
and all elements that don't are in the second.

**`example`** 
```typescript

partitionArray([1, 2, 3, 4], x => x % 2)
// Returns [[1, 3], [2, 4]]
```

**Type parameters:**

▪ **T**

**Parameters:**

▪ **array**: *T[]*

The array to partition

▪ **predicate**: *function*

Function to test each item. Items that return true are placed in the first array,
otherwise they are returned in the second array

▸ (`value`: T, `index`: number, `array`: T[]): *boolean*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |
`index` | number |
`array` | T[] |

▪`Optional`  **context**: *any*

**Returns:** *[T[], T[]]*

Two arrays, the first containing all items that satisfied the predicate, the second containing the rest
