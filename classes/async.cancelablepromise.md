[@cahil/utils](../README.md) › [Globals](../globals.md) › [async](../modules/async.md) › [CancelablePromise](async.cancelablepromise.md)

# Class: CancelablePromise <**T**>

Creates a promise that can be canceled after starting. Canceling the promise does not stop it from executing but will
cause it to reject with the value `{ isCanceled: true }` once it finishes, regardless of outcome.

```ts

const promise = new CancelablePromise(res => setTimeout(res, 3000, 'I finished!'))

// Stop the cancelable promise from resolving
cancelablePromise.cancel()

cancelablePromise
  .then(result => console.log('Cancelable', result)) // Never fires, the promise will not resolve after being cancelled
  .catch(err => console.log('Cancelable', err)) // Resolves after 3000ms with the value `{ isCanceled: true }`
```

## Type parameters

▪ **T**: *any*

## Hierarchy

* Promise‹T›

  ↳ **CancelablePromise**

## Index

### Constructors

* [constructor](async.cancelablepromise.md#constructor)

### Properties

* [canceled](async.cancelablepromise.md#private-canceled)
* [promise](async.cancelablepromise.md#protected-promise)
* [Promise](async.cancelablepromise.md#static-promise)

### Accessors

* [__@toStringTag](async.cancelablepromise.md#__@tostringtag)
* [hasCanceled](async.cancelablepromise.md#hascanceled)

### Methods

* [cancel](async.cancelablepromise.md#cancel)
* [catch](async.cancelablepromise.md#catch)
* [finally](async.cancelablepromise.md#finally)
* [then](async.cancelablepromise.md#then)

## Constructors

###  constructor

\+ **new CancelablePromise**(`executor`: function): *[CancelablePromise](async.cancelablepromise.md)*

*Defined in [src/async/CancelablePromise.ts:36](https://github.com/cahilfoley/utils/blob/22bd396/src/async/CancelablePromise.ts#L36)*

**Parameters:**

▪ **executor**: *function*

▸ (`resolve`: function, `reject`: function): *void*

**Parameters:**

▪ **resolve**: *function*

▸ (`value`: T): *void*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

▪ **reject**: *function*

▸ (`err?`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`err?` | any |

**Returns:** *[CancelablePromise](async.cancelablepromise.md)*

## Properties

### `Private` canceled

• **canceled**: *boolean* = false

*Defined in [src/async/CancelablePromise.ts:27](https://github.com/cahilfoley/utils/blob/22bd396/src/async/CancelablePromise.ts#L27)*

___

### `Protected` promise

• **promise**: *Promise‹T›*

*Defined in [src/async/CancelablePromise.ts:28](https://github.com/cahilfoley/utils/blob/22bd396/src/async/CancelablePromise.ts#L28)*

___

### `Static` Promise

▪ **Promise**: *PromiseConstructor*

Defined in node_modules/typescript/lib/lib.es2015.promise.d.ts:152

## Accessors

###  __@toStringTag

• **get __@toStringTag**(): *string*

*Overrides void*

*Defined in [src/async/CancelablePromise.ts:30](https://github.com/cahilfoley/utils/blob/22bd396/src/async/CancelablePromise.ts#L30)*

**Returns:** *string*

___

###  hasCanceled

• **get hasCanceled**(): *boolean*

*Defined in [src/async/CancelablePromise.ts:34](https://github.com/cahilfoley/utils/blob/22bd396/src/async/CancelablePromise.ts#L34)*

**Returns:** *boolean*

## Methods

###  cancel

▸ **cancel**(): *void*

*Defined in [src/async/CancelablePromise.ts:47](https://github.com/cahilfoley/utils/blob/22bd396/src/async/CancelablePromise.ts#L47)*

**Returns:** *void*

___

###  catch

▸ **catch**<**TResult**>(`onrejected`: function): *Promise‹T | TResult›*

*Overrides void*

*Defined in [src/async/CancelablePromise.ts:58](https://github.com/cahilfoley/utils/blob/22bd396/src/async/CancelablePromise.ts#L58)*

**Type parameters:**

▪ **TResult**

**Parameters:**

▪ **onrejected**: *function*

▸ (`reason`: any): *TResult | PromiseLike‹TResult›*

**Parameters:**

Name | Type |
------ | ------ |
`reason` | any |

**Returns:** *Promise‹T | TResult›*

___

###  finally

▸ **finally**(`onfinally`: function): *Promise‹T›*

*Overrides void*

*Defined in [src/async/CancelablePromise.ts:64](https://github.com/cahilfoley/utils/blob/22bd396/src/async/CancelablePromise.ts#L64)*

**Parameters:**

▪ **onfinally**: *function*

▸ (): *void*

**Returns:** *Promise‹T›*

___

###  then

▸ **then**<**TResult1**, **TResult2**>(`onfulfilled`: function, `onrejected?`: function): *Promise‹TResult1 | TResult2›*

*Overrides void*

*Defined in [src/async/CancelablePromise.ts:51](https://github.com/cahilfoley/utils/blob/22bd396/src/async/CancelablePromise.ts#L51)*

**Type parameters:**

▪ **TResult1**

▪ **TResult2**

**Parameters:**

▪ **onfulfilled**: *function*

▸ (`value`: T): *TResult1 | PromiseLike‹TResult1›*

**Parameters:**

Name | Type |
------ | ------ |
`value` | T |

▪`Optional`  **onrejected**: *function*

▸ (`reason`: any): *TResult2 | PromiseLike‹TResult2›*

**Parameters:**

Name | Type |
------ | ------ |
`reason` | any |

**Returns:** *Promise‹TResult1 | TResult2›*
