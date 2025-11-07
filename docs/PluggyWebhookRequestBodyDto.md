
# PluggyWebhookRequestBodyDto


## Properties

Name | Type
------------ | -------------
`event` | string
`eventId` | string
`itemId` | string
`triggeredBy` | string
`error` | [PluggyWebhookRequestBodyDtoError](PluggyWebhookRequestBodyDtoError.md)

## Example

```typescript
import type { PluggyWebhookRequestBodyDto } from '@usesofia/pegasus-integrations-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "event": null,
  "eventId": null,
  "itemId": null,
  "triggeredBy": null,
  "error": null,
} satisfies PluggyWebhookRequestBodyDto

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PluggyWebhookRequestBodyDto
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


