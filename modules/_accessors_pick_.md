[@cahil/utils](../README.md) › [Globals](../globals.md) › ["accessors/pick"](_accessors_pick_.md)

# External module: "accessors/pick"

## Index

### Functions

* [pick](_accessors_pick_.md#pick)

## Functions

###  pick

▸ **pick**<**T**, **U**>(`object`: T, ...`keys`: U[]): *Pick‹T, U›*

*Defined in [src/accessors/pick.ts:25](https://github.com/cahilfoley/utils/blob/22bd396/src/accessors/pick.ts#L25)*

Creates a new object containing only the properties of `object` that are specified in `keys`.

**`example`** 
```typescript

const original = { foo: 'hello', bar: 'world', baz: false, something: [1, 2, 3] }
const picked = pick(original, 'foo', 'something')

console.log(picked) // { foo: 'hello', something: [1, 2, 3] }
console.log(Object.keys(picked)) // ['foo', 'something']
```

**Type parameters:**

▪ **T**: *Record‹string, any›*

▪ **U**: *keyof T*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`object` | T | The base object that properties will be picked from |
`...keys` | U[] | The keys to pick  |

**Returns:** *Pick‹T, U›*

▸ **pick**<**T**, **U**>(`object`: T, `keys`: U[]): *Pick‹T, U›*

*Defined in [src/accessors/pick.ts:29](https://github.com/cahilfoley/utils/blob/22bd396/src/accessors/pick.ts#L29)*

**Type parameters:**

▪ **T**: *Record‹string, any›*

▪ **U**: *keyof T*

**Parameters:**

Name | Type |
------ | ------ |
`object` | T |
`keys` | U[] |

**Returns:** *Pick‹T, U›*
