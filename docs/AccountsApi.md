# AccountsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**findAllAccounts**](AccountsApi.md#findallaccounts) | **GET** /external/open-finance/items/{itemId}/accounts | Find all accounts for a given item |
| [**getLastAccountSuccessSync**](AccountsApi.md#getlastaccountsuccesssync) | **GET** /external/open-finance/accounts/{accountId}/last-success-sync | Get the last successful sync date for an account |
| [**startAccountTransactionsSync**](AccountsApi.md#startaccounttransactionssync) | **POST** /internal/open-finance/accounts/on/bank-account-created | Start account transactions sync |
| [**syncAccountTransactions**](AccountsApi.md#syncaccounttransactions) | **POST** /internal/queues/account-transactions-sync | Process account transactions sync job |



## findAllAccounts

> Array&lt;RawAccountEntity&gt; findAllAccounts(itemId)

Find all accounts for a given item

### Example

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

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **itemId** | `string` | The item id | [Defaults to `undefined`] |

### Return type

[**Array&lt;RawAccountEntity&gt;**](RawAccountEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## getLastAccountSuccessSync

> AccountLastSuccessSyncEntity getLastAccountSuccessSync(accountId)

Get the last successful sync date for an account

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '@usesofia/pegasus-integrations-api-sdk';
import type { GetLastAccountSuccessSyncRequest } from '@usesofia/pegasus-integrations-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-integrations-api-sdk SDK...");
  const api = new AccountsApi();

  const body = {
    // string | The sofia account id
    accountId: accountId_example,
  } satisfies GetLastAccountSuccessSyncRequest;

  try {
    const data = await api.getLastAccountSuccessSync(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountId** | `string` | The sofia account id | [Defaults to `undefined`] |

### Return type

[**AccountLastSuccessSyncEntity**](AccountLastSuccessSyncEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## startAccountTransactionsSync

> startAccountTransactionsSync(onBankAccountCreatedPayload)

Start account transactions sync

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '@usesofia/pegasus-integrations-api-sdk';
import type { StartAccountTransactionsSyncRequest } from '@usesofia/pegasus-integrations-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-integrations-api-sdk SDK...");
  const api = new AccountsApi();

  const body = {
    // OnBankAccountCreatedPayload
    onBankAccountCreatedPayload: ...,
  } satisfies StartAccountTransactionsSyncRequest;

  try {
    const data = await api.startAccountTransactionsSync(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **onBankAccountCreatedPayload** | [OnBankAccountCreatedPayload](OnBankAccountCreatedPayload.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## syncAccountTransactions

> syncAccountTransactions(accountTransactionsSyncJobPayload)

Process account transactions sync job

### Example

```ts
import {
  Configuration,
  AccountsApi,
} from '@usesofia/pegasus-integrations-api-sdk';
import type { SyncAccountTransactionsRequest } from '@usesofia/pegasus-integrations-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-integrations-api-sdk SDK...");
  const api = new AccountsApi();

  const body = {
    // AccountTransactionsSyncJobPayload
    accountTransactionsSyncJobPayload: ...,
  } satisfies SyncAccountTransactionsRequest;

  try {
    const data = await api.syncAccountTransactions(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **accountTransactionsSyncJobPayload** | [AccountTransactionsSyncJobPayload](AccountTransactionsSyncJobPayload.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

