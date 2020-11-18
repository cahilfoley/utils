[@cahil/utils](../README.md) › [Globals](../globals.md) › ["array/updateItem"](_array_updateitem_.md)

# External module: "array/updateItem"

## Index

### Functions

* [updateItem](_array_updateitem_.md#updateitem)

## Functions

###  updateItem

▸ **updateItem**(`array`: object[], `query`: object, `updateCallback`: function): *object[]*

*Defined in [src/array/updateItem.ts:18](https://github.com/cahilfoley/utils/blob/22bd396/src/array/updateItem.ts#L18)*

Updates an item in an array and returns a new array

**Parameters:**

▪ **array**: *object[]*

The array to update

▪ **query**: *object*

A map of property paths (period delimited string) to values used to test if an object should be updated,
the paths are used in the get function

▪ **updateCallback**: *function*

A callback used to update the item

▸ (`item`: any): *any*

**Parameters:**

Name | Type |
------ | ------ |
`item` | any |

**Returns:** *object[]*

The array with the updated item
