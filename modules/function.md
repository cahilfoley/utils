[@cahil/utils](../README.md) › [Globals](../globals.md) › [function](function.md)

# External module: function

## Index

### Functions

* [partial](function.md#partial)

## Functions

###  partial

▸ **partial**(`func`: function, ...`argsBound`: any[]): *function*

*Defined in [src/function/partial.ts:22](https://github.com/cahilfoley/utils/blob/22bd396/src/function/partial.ts#L22)*

Creates a function that invokes `func` with `partials` prepended to the arguments it receives.

**`example`** 
```typescript

const addNums = (a, b, c) => a + b + c
const addNumsTo5 = partial(addNums, 5)

addNumsTo5(1, 3) // => 9
```

**Parameters:**

▪ **func**: *function*

The function to partially apply arguments to

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪... **argsBound**: *any[]*

The arguments to be partially applied

**Returns:** *function*

▸ (...`remainingArgs`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...remainingArgs` | any[] |
