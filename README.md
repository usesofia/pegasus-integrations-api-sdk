# @usesofia/pegasus-integrations-api-sdk@3.0.2

A TypeScript SDK client for the localhost API.

## Usage

First, install the SDK from npm.

```bash
npm install @usesofia/pegasus-integrations-api-sdk --save
```

Next, try it out.


```ts
import {
  Configuration,
  AccountsApi,
} from '@usesofia/pegasus-integrations-api-sdk';
import type { FindAllAccountsRequest } from '@usesofia/pegasus-integrations-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-integrations-api-sdk SDK...");
  const api = new AccountsApi();

  const body = {
    // string | The item id
    itemId: itemId_example,
  } satisfies FindAllAccountsRequest;

  try {
    const data = await api.findAllAccounts(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```


## Documentation

### API Endpoints

All URIs are relative to *http://localhost*

| Class | Method | HTTP request | Description
| ----- | ------ | ------------ | -------------
*AccountsApi* | [**findAllAccounts**](docs/AccountsApi.md#findallaccounts) | **GET** /external/open-finance/items/{itemId}/accounts | Find all accounts for a given item
*AccountsApi* | [**getLastAccountSuccessSync**](docs/AccountsApi.md#getlastaccountsuccesssync) | **GET** /external/open-finance/accounts/{accountId}/last-success-sync | Get the last successful sync date for an account
*AccountsApi* | [**startAccountTransactionsSync**](docs/AccountsApi.md#startaccounttransactionssync) | **POST** /internal/open-finance/accounts/on/bank-account-created | Start account transactions sync
*AccountsApi* | [**syncAccountTransactions**](docs/AccountsApi.md#syncaccounttransactions) | **POST** /internal/queues/account-transactions-sync | Process account transactions sync job
*CacheApi* | [**getCacheValue**](docs/CacheApi.md#getcachevalue) | **GET** /external/cache | Get string value from cache
*CacheApi* | [**setCacheValue**](docs/CacheApi.md#setcachevalue) | **PUT** /external/cache | Set string value in cache with 10-second TTL
*EmailForwardingApi* | [**emailForwardingWebhook**](docs/EmailForwardingApi.md#emailforwardingwebhook) | **POST** /external/email-forwarding/webhook | Email forwarding webhook endpoint
*EmailForwardingApi* | [**processEmail**](docs/EmailForwardingApi.md#processemail) | **POST** /internal/queues/process-email-for-forwarding-integration | Process email for forwarding integration
*HealthApi* | [**error**](docs/HealthApi.md#error) | **GET** /error | Gera um erro de teste.
*HealthApi* | [**health**](docs/HealthApi.md#health) | **GET** / | Verifica o status do serviço.
*HealthApi* | [**healthPost**](docs/HealthApi.md#healthpost) | **POST** / | Verifica o status do serviço.
*IntegrationsApi* | [**getIntegrationPreviews**](docs/IntegrationsApi.md#getintegrationpreviews) | **GET** /external/integrations/preview | Get integrations preview
*PluggyApi* | [**createConnectToken**](docs/PluggyApi.md#createconnecttoken) | **POST** /external/open-finance/pluggy/connect-token | Create a connect token
*PluggyApi* | [**pluggyWebhook**](docs/PluggyApi.md#pluggywebhook) | **POST** /external/open-finance/pluggy/webhook | Pluggy webhook endpoint to receive event notifications
*TransactionsApi* | [**processAccountTransactionsPageSync**](docs/TransactionsApi.md#processaccounttransactionspagesync) | **POST** /internal/queues/account-transactions-page-sync | Process account transactions page sync


### Models

- [AccountLastSuccessSyncEntity](docs/AccountLastSuccessSyncEntity.md)
- [AccountLastSuccessSyncEntityData](docs/AccountLastSuccessSyncEntityData.md)
- [AccountTransactionPageSyncJobPayload](docs/AccountTransactionPageSyncJobPayload.md)
- [AccountTransactionsSyncJobPayload](docs/AccountTransactionsSyncJobPayload.md)
- [CacheGetResponseDto](docs/CacheGetResponseDto.md)
- [CacheSetDto](docs/CacheSetDto.md)
- [CreateConnectTokenRequestBodyDto](docs/CreateConnectTokenRequestBodyDto.md)
- [CreateConnectTokenResponseBodyDto](docs/CreateConnectTokenResponseBodyDto.md)
- [ExceptionResponseEntity](docs/ExceptionResponseEntity.md)
- [ExceptionResponseEntityErrorsInner](docs/ExceptionResponseEntityErrorsInner.md)
- [ForwardedEmailEntity](docs/ForwardedEmailEntity.md)
- [ForwardedEmailEntityCharsets](docs/ForwardedEmailEntityCharsets.md)
- [ForwardedEmailEntityEnvelope](docs/ForwardedEmailEntityEnvelope.md)
- [ForwardedEmailEntityPopulatedAttachmentsInner](docs/ForwardedEmailEntityPopulatedAttachmentsInner.md)
- [HealthResponseDto](docs/HealthResponseDto.md)
- [IntegrationPreviewEntity](docs/IntegrationPreviewEntity.md)
- [OnBankAccountCreatedPayload](docs/OnBankAccountCreatedPayload.md)
- [OnBankAccountCreatedPayloadBankAccount](docs/OnBankAccountCreatedPayloadBankAccount.md)
- [PluggyWebhookRequestBodyDto](docs/PluggyWebhookRequestBodyDto.md)
- [PluggyWebhookRequestBodyDtoError](docs/PluggyWebhookRequestBodyDtoError.md)
- [ProcessEmailForForwardingIntegrationRequestBodyDto](docs/ProcessEmailForForwardingIntegrationRequestBodyDto.md)
- [ProcessEmailForForwardingIntegrationRequestBodyDtoRequester](docs/ProcessEmailForForwardingIntegrationRequestBodyDtoRequester.md)
- [ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization](docs/ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization.md)
- [ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationChildrenInner](docs/ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationChildrenInner.md)
- [ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent](docs/ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent.md)
- [RawAccountEntity](docs/RawAccountEntity.md)
- [RawAccountEntityConnector](docs/RawAccountEntityConnector.md)

### Authorization

Endpoints do not require authorization.


## About

This TypeScript SDK client supports the [Fetch API](https://fetch.spec.whatwg.org/)
and is automatically generated by the
[OpenAPI Generator](https://openapi-generator.tech) project:

- API version: `3.0.2`
- Package version: `3.0.2`
- Generator version: `7.18.0`
- Build package: `org.openapitools.codegen.languages.TypeScriptFetchClientCodegen`

The generated npm module supports the following:

- Environments
  * Node.js
  * Webpack
  * Browserify
- Language levels
  * ES5 - you must have a Promises/A+ library installed
  * ES6
- Module systems
  * CommonJS
  * ES6 module system


## Development

### Building

To build the TypeScript source code, you need to have Node.js and npm installed.
After cloning the repository, navigate to the project directory and run:

```bash
npm install
npm run build
```

### Publishing

Once you've built the package, you can publish it to npm:

```bash
npm publish
```

## License

[]()
