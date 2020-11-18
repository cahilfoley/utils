[@cahil/utils](../README.md) › [Globals](../globals.md) › [async](async.md)

# External module: async

## Index

### Classes

* [CancelablePromise](../classes/async.cancelablepromise.md)

### Interfaces

* [CancelableWrappedPromise](../interfaces/async.cancelablewrappedpromise.md)

### Functions

* [makeCancelable](async.md#makecancelable)
* [pause](async.md#pause)

### Object literals

* [canceledError](async.md#const-cancelederror)

## Functions

###  makeCancelable

▸ **makeCancelable**<**T**>(`promise`: Promise‹T›): *[CancelableWrappedPromise](../interfaces/async.cancelablewrappedpromise.md)‹T›*

*Defined in [src/async/makeCancelable.ts:44](https://github.com/cahilfoley/utils/blob/22bd396/src/async/makeCancelable.ts#L44)*

Allows the provided promise to be canceled after starting. This does not stop the promise from executing but will
cause it to reject with the value `{ isCanceled: true }` once it finishes, regardless of outcome.

**`example`** 
```typescript

const promise = new Promise((res, rej) => {
  setTimeout(() => res('I finished!'), 3000)
})

// Create a cancelable version of the promise
const cancelablePromise = makeCancelable(promise)

// Stop the cancelable promise from resolving
cancelablePromise.cancel()

promise
  .then(result => console.log('Normal', result)) // This will log `'I finished!'` after 3000ms
  .catch(err => console.log('Normal', err)) // Will reject as per normal

cancelablePromise
  .then(result => console.log('Cancelable', result)) // Never fires, the promise will not resolve after being cancelled
  .catch(err => console.log('Cancelable', err)) // Resolves after 3000ms with the value `{ isCanceled: true }`
```

**Type parameters:**

▪ **T**

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`promise` | Promise‹T› | The promise that is executing |

**Returns:** *[CancelableWrappedPromise](../interfaces/async.cancelablewrappedpromise.md)‹T›*

The cancelable version of the promise

___

###  pause

▸ **pause**(`ms`: number): *Promise‹unknown›*

*Defined in [src/async/pause.ts:27](https://github.com/cahilfoley/utils/blob/22bd396/src/async/pause.ts#L27)*

Creates a promise that resolves in the provided number of milliseconds.

This function is basically a promise version of `setTimeout`

**`example`** 
```typescript

async function run() {
  console.log('first log')
  await pause(500)

  // Will run 500 milliseconds after the first
  console.log('second log')
}
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`ms` | number | The number of ms to pause for |

**Returns:** *Promise‹unknown›*

The executing promise

## Object literals

### `Const` canceledError

### ▪ **canceledError**: *object*

*Defined in [src/async/makeCancelable.ts:6](https://github.com/cahilfoley/utils/blob/22bd396/src/async/makeCancelable.ts#L6)*

An error that indicates a promise has rejected because it was canceled

###  isCanceled

• **isCanceled**: *boolean* = true

*Defined in [src/async/makeCancelable.ts:6](https://github.com/cahilfoley/utils/blob/22bd396/src/async/makeCancelable.ts#L6)*
