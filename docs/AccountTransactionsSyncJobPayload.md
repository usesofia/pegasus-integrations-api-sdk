
# AccountTransactionsSyncJobPayload


## Properties

Name | Type
------------ | -------------
`requester` | [ProcessEmailForForwardingIntegrationRequestBodyDtoRequester](ProcessEmailForForwardingIntegrationRequestBodyDtoRequester.md)
`accountTransactionsSyncJobRequestId` | string

## Example

```typescript
import type { AccountTransactionsSyncJobPayload } from '@usesofia/pegasus-integrations-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "requester": null,
  "accountTransactionsSyncJobRequestId": null,
} satisfies AccountTransactionsSyncJobPayload

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as AccountTransactionsSyncJobPayload
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


