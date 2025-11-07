
# ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`type` | string
`role` | string
`parent` | [ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent](ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent.md)
`children` | [Array&lt;ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationChildrenInner&gt;](ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationChildrenInner.md)

## Example

```typescript
import type { ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization } from '@usesofia/pegasus-integrations-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "type": null,
  "role": null,
  "parent": null,
  "children": null,
} satisfies ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


