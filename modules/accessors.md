[@cahil/utils](../README.md) › [Globals](../globals.md) › [accessors](accessors.md)

# External module: accessors

## Index

### Interfaces

* [CloneOptions](../interfaces/accessors.cloneoptions.md)

### Functions

* [clone](accessors.md#clone)

## Functions

###  clone

▸ **clone**<**T**>(`original`: T, `options?`: [CloneOptions](../interfaces/accessors.cloneoptions.md)): *T*

*Defined in [src/accessors/clone.ts:23](https://github.com/cahilfoley/utils/blob/22bd396/src/accessors/clone.ts#L23)*

Creates a deep clone of a value

**Type parameters:**

▪ **T**

The type of the original value

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`original` | T | The value to clone |
`options?` | [CloneOptions](../interfaces/accessors.cloneoptions.md) | Config options |

**Returns:** *T*

Returns the deep cloned value
