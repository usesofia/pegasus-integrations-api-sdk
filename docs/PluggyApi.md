# PluggyApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**createConnectToken**](PluggyApi.md#createconnecttoken) | **POST** /external/open-finance/pluggy/connect-token | Create a connect token |
| [**pluggyWebhook**](PluggyApi.md#pluggywebhook) | **POST** /external/open-finance/pluggy/webhook | Pluggy webhook endpoint to receive event notifications |



## createConnectToken

> CreateConnectTokenResponseBodyDto createConnectToken(createConnectTokenRequestBodyDto)

Create a connect token

### Example

```ts
import {
  Configuration,
  PluggyApi,
} from '@usesofia/pegasus-integrations-api-sdk';
import type { CreateConnectTokenRequest } from '@usesofia/pegasus-integrations-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-integrations-api-sdk SDK...");
  const api = new PluggyApi();

  const body = {
    // CreateConnectTokenRequestBodyDto
    createConnectTokenRequestBodyDto: ...,
  } satisfies CreateConnectTokenRequest;

  try {
    const data = await api.createConnectToken(body);
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
| **createConnectTokenRequestBodyDto** | [CreateConnectTokenRequestBodyDto](CreateConnectTokenRequestBodyDto.md) |  | |

### Return type

[**CreateConnectTokenResponseBodyDto**](CreateConnectTokenResponseBodyDto.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## pluggyWebhook

> pluggyWebhook(pluggyWebhookRequestBodyDto)

Pluggy webhook endpoint to receive event notifications

### Example

```ts
import {
  Configuration,
  PluggyApi,
} from '@usesofia/pegasus-integrations-api-sdk';
import type { PluggyWebhookRequest } from '@usesofia/pegasus-integrations-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-integrations-api-sdk SDK...");
  const api = new PluggyApi();

  const body = {
    // PluggyWebhookRequestBodyDto
    pluggyWebhookRequestBodyDto: ...,
  } satisfies PluggyWebhookRequest;

  try {
    const data = await api.pluggyWebhook(body);
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
| **pluggyWebhookRequestBodyDto** | [PluggyWebhookRequestBodyDto](PluggyWebhookRequestBodyDto.md) |  | |

### Return type

`void` (Empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: `application/json`
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** |  |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

