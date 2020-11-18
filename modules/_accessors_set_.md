[@cahil/utils](../README.md) › [Globals](../globals.md) › ["accessors/set"](_accessors_set_.md)

# External module: "accessors/set"

## Index

### Functions

* [set](_accessors_set_.md#set)

## Functions

###  set

▸ **set**(`object`: Record‹string, any› | any[], `path`: string[] | string, `value`: any): *void*

*Defined in [src/accessors/set.ts:33](https://github.com/cahilfoley/utils/blob/22bd396/src/accessors/set.ts#L33)*

Sets the value at path of object. If a portion of path doesn't exist, it's created. Arrays are created for missing
index properties while objects are created for all other missing properties.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | Record‹string, any› &#124; any[] | The object to modify |
`path` | string[] &#124; string | The path of the property to set |
`value` | any | The value to set   |

**Returns:** *void*
