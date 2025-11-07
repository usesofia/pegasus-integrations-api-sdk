
# PluggyWebhookRequestBodyDtoError

Error details in case of item/error event

## Properties

Name | Type
------------ | -------------
`code` | string
`message` | string
`parameter` | string

## Example

```typescript
import type { PluggyWebhookRequestBodyDtoError } from '@usesofia/pegasus-integrations-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "code": null,
  "message": null,
  "parameter": null,
} satisfies PluggyWebhookRequestBodyDtoError

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as PluggyWebhookRequestBodyDtoError
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


