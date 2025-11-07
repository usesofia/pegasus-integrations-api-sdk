
# RawAccountEntity


## Properties

Name | Type
------------ | -------------
`provider` | string
`id` | string
`type` | string
`subtype` | string
`number` | string
`name` | string
`balance` | string
`currencyCode` | string
`connector` | [RawAccountEntityConnector](RawAccountEntityConnector.md)

## Example

```typescript
import type { RawAccountEntity } from '@usesofia/pegasus-integrations-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "provider": null,
  "id": null,
  "type": null,
  "subtype": null,
  "number": null,
  "name": null,
  "balance": null,
  "currencyCode": null,
  "connector": null,
} satisfies RawAccountEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as RawAccountEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


