# TransactionsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**processAccountTransactionsPageSync**](TransactionsApi.md#processaccounttransactionspagesync) | **POST** /internal/queues/account-transactions-page-sync | Process account transactions page sync |



## processAccountTransactionsPageSync

> processAccountTransactionsPageSync(accountTransactionPageSyncJobPayload)

Process account transactions page sync

### Example

```ts
import {
  Configuration,
  TransactionsApi,
} from '@usesofia/pegasus-integrations-api-sdk';
import type { ProcessAccountTransactionsPageSyncRequest } from '@usesofia/pegasus-integrations-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-integrations-api-sdk SDK...");
  const api = new TransactionsApi();

  const body = {
    // AccountTransactionPageSyncJobPayload
    accountTransactionPageSyncJobPayload: ...,
  } satisfies ProcessAccountTransactionsPageSyncRequest;

  try {
    const data = await api.processAccountTransactionsPageSync(body);
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
| **accountTransactionPageSyncJobPayload** | [AccountTransactionPageSyncJobPayload](AccountTransactionPageSyncJobPayload.md) |  | |

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

