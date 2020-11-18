[@cahil/utils](../README.md) › [Globals](../globals.md) › [tests](tests.md)

# External module: tests

## Index

### Functions

* [buildCaseArray](tests.md#buildcasearray)
* [runTest](tests.md#runtest)

## Functions

###  buildCaseArray

▸ **buildCaseArray**(`testInputs`: any[], `output`: any): *any[][]*

*Defined in [src/tests/buildCaseArray.ts:20](https://github.com/cahilfoley/utils/blob/22bd396/src/tests/buildCaseArray.ts#L20)*

Builds an array of test cases with a common output

**`example`** 
```typescript

const evenTests = [...buildCaseArray([2, 4, 6], true), ...buildCaseArray([1, 3, 5], false)]
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`testInputs` | any[] | An array of test inputs to build into the case array |
`output` | any | The single output that should be paired with every input |

**Returns:** *any[][]*

Returns the array of test cases

___

###  runTest

▸ **runTest**(`testCase`: [any, any], `func`: function, `testVerb`: string): *void*

*Defined in [src/tests/runTest.ts:21](https://github.com/cahilfoley/utils/blob/22bd396/src/tests/runTest.ts#L21)*

Runs a test based on input(s), if an array is provided then the items are passed as arguments to the function
being tested, if anything else is provided then it is passed directly to the function

**`example`** 
```typescript

runTest([[3, 5], 8], (a, b) => a + b)
```

**Parameters:**

▪ **testCase**: *[any, any]*

A tuple of inputs and expected output

▪ **func**: *function*

The function to test

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Default value`  **testVerb**: *string*= "toBe"

The jest `expect` verb to use when testing - defaults to `toBe`

**Returns:** *void*
