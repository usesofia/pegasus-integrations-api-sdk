# EmailForwardingApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**emailForwardingWebhook**](EmailForwardingApi.md#emailforwardingwebhook) | **POST** /external/email-forwarding/webhook | Email forwarding webhook endpoint |
| [**processEmail**](EmailForwardingApi.md#processemail) | **POST** /internal/queues/process-email-for-forwarding-integration | Process email for forwarding integration |



## emailForwardingWebhook

> ForwardedEmailEntity emailForwardingWebhook()

Email forwarding webhook endpoint

Receives email forwarding webhooks from email parsing service and processes them to create forwarded email records

### Example

```ts
import {
  Configuration,
  EmailForwardingApi,
} from '@usesofia/pegasus-integrations-api-sdk';
import type { EmailForwardingWebhookRequest } from '@usesofia/pegasus-integrations-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-integrations-api-sdk SDK...");
  const api = new EmailForwardingApi();

  try {
    const data = await api.emailForwardingWebhook();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ForwardedEmailEntity**](ForwardedEmailEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **201** | The created forwarded email record |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## processEmail

> processEmail(processEmailForForwardingIntegrationRequestBodyDto)

Process email for forwarding integration

### Example

```ts
import {
  Configuration,
  EmailForwardingApi,
} from '@usesofia/pegasus-integrations-api-sdk';
import type { ProcessEmailRequest } from '@usesofia/pegasus-integrations-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-integrations-api-sdk SDK...");
  const api = new EmailForwardingApi();

  const body = {
    // ProcessEmailForForwardingIntegrationRequestBodyDto
    processEmailForForwardingIntegrationRequestBodyDto: ...,
  } satisfies ProcessEmailRequest;

  try {
    const data = await api.processEmail(body);
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
| **processEmailForForwardingIntegrationRequestBodyDto** | [ProcessEmailForForwardingIntegrationRequestBodyDto](ProcessEmailForForwardingIntegrationRequestBodyDto.md) |  | |

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

