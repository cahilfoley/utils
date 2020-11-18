[@cahil/utils](../README.md) › [Globals](../globals.md) › ["array/filterBy"](_array_filterby_.md)

# External module: "array/filterBy"

## Index

### Functions

* [filterBy](_array_filterby_.md#filterby)

## Functions

###  filterBy

▸ **filterBy**(`array`: object[], `path`: string | string[], `value`: any): *object[]*

*Defined in [src/array/filterBy.ts:17](https://github.com/cahilfoley/utils/blob/22bd396/src/array/filterBy.ts#L17)*

 Allows filtering of an array by querying a property with a getter path instead of a callback function.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`array` | object[] | The array of object to filter |
`path` | string &#124; string[] | The path of the property to filter |
`value` | any | The value of the property to filter |

**Returns:** *object[]*

Array filtered according to property and past value
