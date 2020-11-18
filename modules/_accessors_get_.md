[@cahil/utils](../README.md) › [Globals](../globals.md) › ["accessors/get"](_accessors_get_.md)

# External module: "accessors/get"

## Index

### Functions

* [get](_accessors_get_.md#get)

## Functions

###  get

▸ **get**<**T**>(`object`: object, `path`: string[] | string, `defaultValue?`: T): *T*

*Defined in [src/accessors/get.ts:17](https://github.com/cahilfoley/utils/blob/22bd396/src/accessors/get.ts#L17)*

Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | object | The object to query |
`path` | string[] &#124; string | The path of the property to get |
`defaultValue?` | T | The value returned for undefined resolved values |

**Returns:** *T*

The value if it exists, if not then either the default value is returned or undefined
