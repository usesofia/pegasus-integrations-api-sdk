# IntegrationsApi

All URIs are relative to *http://localhost*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**getIntegrationPreviews**](IntegrationsApi.md#getintegrationpreviews) | **GET** /external/integrations/preview | Get integrations preview |



## getIntegrationPreviews

> Array&lt;IntegrationPreviewEntity&gt; getIntegrationPreviews()

Get integrations preview

Returns a list of all integrations with their details and availability status

### Example

```ts
import {
  Configuration,
  IntegrationsApi,
} from '@usesofia/pegasus-integrations-api-sdk';
import type { GetIntegrationPreviewsRequest } from '@usesofia/pegasus-integrations-api-sdk';

async function example() {
  console.log("🚀 Testing @usesofia/pegasus-integrations-api-sdk SDK...");
  const api = new IntegrationsApi();

  try {
    const data = await api.getIntegrationPreviews();
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

[**Array&lt;IntegrationPreviewEntity&gt;**](IntegrationPreviewEntity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** | List of integration previews |  -  |
| **0** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

