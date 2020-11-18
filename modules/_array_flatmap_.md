[@cahil/utils](../README.md) › [Globals](../globals.md) › ["array/flatMap"](_array_flatmap_.md)

# External module: "array/flatMap"

## Index

### Functions

* [flatMap](_array_flatmap_.md#flatmap)

## Functions

###  flatMap

▸ **flatMap**<**TValue**, **TNext**>(`array`: TValue[], `fn`: function): *TNext[]*

*Defined in [src/array/flatMap.ts:25](https://github.com/cahilfoley/utils/blob/22bd396/src/array/flatMap.ts#L25)*

Calls a function on every item in an array and concatenates the resulting arrays into a single flat array.

**`example`** 
```typescript

const items = flatMap(['foo', 'bar'], word => word.split())
// Returns ['f', 'o', 'o', 'b', 'a', 'r']
```

**Type parameters:**

▪ **TValue**

The type of items in the input array

▪ **TNext**

the type of items in the output array

**Parameters:**

▪ **array**: *TValue[]*

The input array to be mapped

▪ **fn**: *function*

The functions used to generate the new items

▸ (`value`: TValue, `index?`: number): *TNext[]*

**Parameters:**

Name | Type |
------ | ------ |
`value` | TValue |
`index?` | number |

**Returns:** *TNext[]*

A flat array of the resulting values
