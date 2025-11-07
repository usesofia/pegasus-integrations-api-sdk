
# OnBankAccountCreatedPayloadBankAccount


## Properties

Name | Type
------------ | -------------
`id` | string
`ownerOrganization` | string
`name` | string
`type` | string
`number` | string
`isAutomatic` | boolean
`isDefault` | boolean
`initialBalanceDate` | any
`initialBalanceAmount` | number
`institution` | string
`active` | boolean
`provider` | string
`providerAccountId` | string
`providerItemId` | string
`createdAt` | any
`updatedAt` | any

## Example

```typescript
import type { OnBankAccountCreatedPayloadBankAccount } from '@usesofia/pegasus-integrations-api-sdk'

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "ownerOrganization": null,
  "name": null,
  "type": null,
  "number": null,
  "isAutomatic": null,
  "isDefault": null,
  "initialBalanceDate": null,
  "initialBalanceAmount": null,
  "institution": null,
  "active": null,
  "provider": null,
  "providerAccountId": null,
  "providerItemId": null,
  "createdAt": null,
  "updatedAt": null,
} satisfies OnBankAccountCreatedPayloadBankAccount

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as OnBankAccountCreatedPayloadBankAccount
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


