[@cahil/utils](../README.md) › [Globals](../globals.md) › ["tests/batchTest"](_tests_batchtest_.md)

# External module: "tests/batchTest"

## Index

### Interfaces

* [BatchTestOptions](../interfaces/_tests_batchtest_.batchtestoptions.md)

### Functions

* [batchTest](_tests_batchtest_.md#batchtest)

## Functions

###  batchTest

▸ **batchTest**(`func`: function, `cases`: any[][], `__namedParameters`: object): *void*

*Defined in [src/tests/batchTest.ts:35](https://github.com/cahilfoley/utils/blob/22bd396/src/tests/batchTest.ts#L35)*

Utility function for running batches of tests with a single call

**`example`** 
```typescript

batchTest(double, [[2, 4], [5, 10]])
```

**Parameters:**

▪ **func**: *function*

The function to test

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪ **cases**: *any[][]*

An array of test case tuples (inputs and expected outputs)

▪`Default value`  **__namedParameters**: *object*=  {}

**Returns:** *void*
