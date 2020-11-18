[@cahil/utils](../README.md) › [Globals](../globals.md) › [async](../modules/async.md) › [CancelableWrappedPromise](async.cancelablewrappedpromise.md)

# Interface: CancelableWrappedPromise <**T**>

A promise that can have it's resolution cancelled

## Type parameters

▪ **T**

## Hierarchy

* Promise‹T›

  ↳ **CancelableWrappedPromise**

## Index

### Properties

* [Promise](async.cancelablewrappedpromise.md#promise)
* [__@toStringTag](async.cancelablewrappedpromise.md#__@tostringtag)

### Methods

* [cancel](async.cancelablewrappedpromise.md#cancel)
* [catch](async.cancelablewrappedpromise.md#catch)
* [finally](async.cancelablewrappedpromise.md#finally)
* [then](async.cancelablewrappedpromise.md#then)

## Properties

###  Promise

• **Promise**: *PromiseConstructor*

Defined in node_modules/typescript/lib/lib.es2015.promise.d.ts:152

___

###  __@toStringTag

• **__@toStringTag**: *string*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:169

## Methods

###  cancel

▸ **cancel**(): *void*

*Defined in [src/async/makeCancelable.ts:10](https://github.com/cahilfoley/utils/blob/22bd396/src/async/makeCancelable.ts#L10)*

**Returns:** *void*

___

###  catch

▸ **catch**<**TResult**>(`onrejected?`: function | undefined | null): *Promise‹T | TResult›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1430

Attaches a callback for only the rejection of the Promise.

**Type parameters:**

▪ **TResult**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onrejected?` | function &#124; undefined &#124; null | The callback to execute when the Promise is rejected. |

**Returns:** *Promise‹T | TResult›*

A Promise for the completion of the callback.

___

###  finally

▸ **finally**(`onfinally?`: function | undefined | null): *Promise‹T›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es2018.promise.d.ts:31

Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
resolved value cannot be modified from the callback.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onfinally?` | function &#124; undefined &#124; null | The callback to execute when the Promise is settled (fulfilled or rejected). |

**Returns:** *Promise‹T›*

A Promise for the completion of the callback.

___

###  then

▸ **then**<**TResult1**, **TResult2**>(`onfulfilled?`: function | undefined | null, `onrejected?`: function | undefined | null): *Promise‹TResult1 | TResult2›*

*Inherited from void*

Defined in node_modules/typescript/lib/lib.es5.d.ts:1423

Attaches callbacks for the resolution and/or rejection of the Promise.

**Type parameters:**

▪ **TResult1**

▪ **TResult2**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`onfulfilled?` | function &#124; undefined &#124; null | The callback to execute when the Promise is resolved. |
`onrejected?` | function &#124; undefined &#124; null | The callback to execute when the Promise is rejected. |

**Returns:** *Promise‹TResult1 | TResult2›*

A Promise for the completion of which ever callback is executed.
