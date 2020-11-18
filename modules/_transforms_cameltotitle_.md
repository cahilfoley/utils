[@cahil/utils](../README.md) › [Globals](../globals.md) › ["transforms/camelToTitle"](_transforms_cameltotitle_.md)

# External module: "transforms/camelToTitle"

## Index

### Functions

* [camelToTitle](_transforms_cameltotitle_.md#cameltotitle)

## Functions

###  camelToTitle

▸ **camelToTitle**(`input`: string): *string*

*Defined in [src/transforms/camelToTitle.ts:36](https://github.com/cahilfoley/utils/blob/22bd396/src/transforms/camelToTitle.ts#L36)*

Transforms the provided camel-case string to title case using rules from
[capitalizemytitle.com](https://capitalizemytitle.com/#)

When to capitalize:
- Capitalize the first word in the title
- Capitalize the last word in the title

When not to capitalize
- articles (a, an, the)
- coordinating conjuctions (and, but, for)
- short prepositions (less than 5 letters - at, by, from)

When one of the above conditions is not met then the word is assumed to be some other important word
and it is capitalized

**`example`** 
```typescript

camelToTitle('iLoveCamels') // => 'I Love Camels'
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`input` | string | The camel-case string to be converted |

**Returns:** *string*

Returns the transformed title case string
