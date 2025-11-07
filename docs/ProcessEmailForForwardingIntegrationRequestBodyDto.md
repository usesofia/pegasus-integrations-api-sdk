
# ProcessEmailForForwardingIntegrationRequestBodyDto


## Properties

Name | Type
------------ | -------------
`forwardedEmailId` | string
`requester` | [ProcessEmailForForwardingIntegrationRequestBodyDtoRequester](ProcessEmailForForwardingIntegrationRequestBodyDtoRequester.md)

## Example

```typescript
import type { ProcessEmailForForwardingIntegrationRequestBodyDto } from '@usesofia/pegasus-integrations-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "forwardedEmailId": null,
  "requester": null,
} satisfies ProcessEmailForForwardingIntegrationRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProcessEmailForForwardingIntegrationRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


