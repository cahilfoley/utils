[@cahil/utils](../README.md) › [Globals](../globals.md) › ["transforms/toCamel"](_transforms_tocamel_.md)

# External module: "transforms/toCamel"

## Index

### Interfaces

* [ToCamelOptions](../interfaces/_transforms_tocamel_.tocameloptions.md)

### Functions

* [toCamel](_transforms_tocamel_.md#tocamel)

## Functions

###  toCamel

▸ **toCamel**(`input`: string): *string*

*Defined in [src/transforms/toCamel.ts:39](https://github.com/cahilfoley/utils/blob/22bd396/src/transforms/toCamel.ts#L39)*

Transforms the provided string into camel-case.

If the string contains a combination of upper and lower-case letters then the method
will retain the capitalization of acronyms. This behaviour can be explicitly toggled
on or off with the `keepAcronyms` option.

**`example`** 
```typescript

toCamel('ILoveCamels') // => 'iLoveCamels'
toCamel('User ID') // => 'userID'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | string | The string to be converted |

**Returns:** *string*

Returns the camel-case string

▸ **toCamel**(`input`: string, `options`: [ToCamelOptions](../interfaces/_transforms_tocamel_.tocameloptions.md)): *string*

*Defined in [src/transforms/toCamel.ts:40](https://github.com/cahilfoley/utils/blob/22bd396/src/transforms/toCamel.ts#L40)*

**Parameters:**

Name | Type |
------ | ------ |
`input` | string |
`options` | [ToCamelOptions](../interfaces/_transforms_tocamel_.tocameloptions.md) |

**Returns:** *string*
