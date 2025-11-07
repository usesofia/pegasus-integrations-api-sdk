
# AccountLastSuccessSyncEntityData


## Properties

Name | Type
------------ | -------------
`accountTransactionsSyncJobRequestId` | string
`accountTransactionsSyncJobExecutionId` | string
`finishedAt` | any
`nTotalItems` | number

## Example

```typescript
import type { AccountLastSuccessSyncEntityData } from '@usesofia/pegasus-integrations-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "accountTransactionsSyncJobRequestId": null,
  "accountTransactionsSyncJobExecutionId": null,
  "finishedAt": null,
  "nTotalItems": null,
} satisfies AccountLastSuccessSyncEntityData

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountLastSuccessSyncEntityData
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


