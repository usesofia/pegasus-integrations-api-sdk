
# IntegrationPreviewEntity


## Properties

Name | Type
------------ | -------------
`id` | string
`title` | string
`subtitle` | string
`description` | string
`copy` | string
`content` | string
`iconName` | string
`availability` | string

## Example

```typescript
import type { IntegrationPreviewEntity } from '@usesofia/pegasus-integrations-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "title": null,
  "subtitle": null,
  "description": null,
  "copy": null,
  "content": null,
  "iconName": null,
  "availability": null,
} satisfies IntegrationPreviewEntity

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as IntegrationPreviewEntity
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


