/* tslint:disable */
/* eslint-disable */
/**
 * Sofia Pegasus integrations-api
 * Api principal do sistema Pegasus para integração com outros sistemas.
 *
 * The version of the OpenAPI document: 1.2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  AccountTransactionPageSyncJobPayload,
} from '../models/index';
import {
    AccountTransactionPageSyncJobPayloadFromJSON,
    AccountTransactionPageSyncJobPayloadToJSON,
} from '../models/index';

export interface ProcessAccountTransactionsPageSyncRequest {
    accountTransactionPageSyncJobPayload: AccountTransactionPageSyncJobPayload;
}

/**
 * TransactionsApi - interface
 * 
 * @export
 * @interface TransactionsApiInterface
 */
export interface TransactionsApiInterface {
    /**
     * 
     * @summary Process account transactions page sync
     * @param {AccountTransactionPageSyncJobPayload} accountTransactionPageSyncJobPayload 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApiInterface
     */
    processAccountTransactionsPageSyncRaw(requestParameters: ProcessAccountTransactionsPageSyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;

    /**
     * Process account transactions page sync
     */
    processAccountTransactionsPageSync(requestParameters: ProcessAccountTransactionsPageSyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;

}

/**
 * 
 */
export class TransactionsApi extends runtime.BaseAPI implements TransactionsApiInterface {

    /**
     * Process account transactions page sync
     */
    async processAccountTransactionsPageSyncRaw(requestParameters: ProcessAccountTransactionsPageSyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['accountTransactionPageSyncJobPayload'] == null) {
            throw new runtime.RequiredError(
                'accountTransactionPageSyncJobPayload',
                'Required parameter "accountTransactionPageSyncJobPayload" was null or undefined when calling processAccountTransactionsPageSync().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';


        let urlPath = `/internal/queues/account-transactions-page-sync`;

        const response = await this.request({
            path: urlPath,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: AccountTransactionPageSyncJobPayloadToJSON(requestParameters['accountTransactionPageSyncJobPayload']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Process account transactions page sync
     */
    async processAccountTransactionsPageSync(requestParameters: ProcessAccountTransactionsPageSyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.processAccountTransactionsPageSyncRaw(requestParameters, initOverrides);
    }

}
