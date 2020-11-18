[@cahil/utils](../README.md) › [Globals](../globals.md) › ["tests/batchTest"](../modules/_tests_batchtest_.md) › [BatchTestOptions](_tests_batchtest_.batchtestoptions.md)

# Interface: BatchTestOptions

Options to customize the behaviour of the batchTest function

## Hierarchy

* **BatchTestOptions**

## Index

### Properties

* [runner](_tests_batchtest_.batchtestoptions.md#optional-runner)
* [verb](_tests_batchtest_.batchtestoptions.md#optional-verb)

## Properties

### `Optional` runner

• **runner**? : *function*

*Defined in [src/tests/batchTest.ts:17](https://github.com/cahilfoley/utils/blob/22bd396/src/tests/batchTest.ts#L17)*

The function used to run the test, by default the jest library is used. This is mainly here to all the function
to be tested

#### Type declaration:

▸ (`testCase`: [any, any], `func`: function, `testVerb?`: string): *void*

**Parameters:**

▪ **testCase**: *[any, any]*

▪ **func**: *function*

▸ (...`args`: any[]): *any*

**Parameters:**

Name | Type |
------ | ------ |
`...args` | any[] |

▪`Optional`  **testVerb**: *string*

___

### `Optional` verb

• **verb**? : *string*

*Defined in [src/tests/batchTest.ts:12](https://github.com/cahilfoley/utils/blob/22bd396/src/tests/batchTest.ts#L12)*

The jest `expected` verb to use when running the test
