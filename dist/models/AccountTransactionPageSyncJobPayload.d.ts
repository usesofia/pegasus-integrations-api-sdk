/**
 * Sofia Pegasus integrations-api
 * Api principal do sistema Pegasus para integração com outros sistemas.
 *
 * The version of the OpenAPI document: 1.1.1
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { OnBankAccountCreatedPayloadRequester } from './OnBankAccountCreatedPayloadRequester';
/**
 *
 * @export
 * @interface AccountTransactionPageSyncJobPayload
 */
export interface AccountTransactionPageSyncJobPayload {
    /**
     *
     * @type {OnBankAccountCreatedPayloadRequester}
     * @memberof AccountTransactionPageSyncJobPayload
     */
    requester: OnBankAccountCreatedPayloadRequester;
    /**
     *
     * @type {string}
     * @memberof AccountTransactionPageSyncJobPayload
     */
    accountTransactionsSyncJobExecutionId: string;
    /**
     *
     * @type {number}
     * @memberof AccountTransactionPageSyncJobPayload
     */
    pageNumber: number;
    /**
     *
     * @type {number}
     * @memberof AccountTransactionPageSyncJobPayload
     */
    pageSize: number;
}
/**
 * Check if a given object implements the AccountTransactionPageSyncJobPayload interface.
 */
export declare function instanceOfAccountTransactionPageSyncJobPayload(value: object): value is AccountTransactionPageSyncJobPayload;
export declare function AccountTransactionPageSyncJobPayloadFromJSON(json: any): AccountTransactionPageSyncJobPayload;
export declare function AccountTransactionPageSyncJobPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountTransactionPageSyncJobPayload;
export declare function AccountTransactionPageSyncJobPayloadToJSON(json: any): AccountTransactionPageSyncJobPayload;
export declare function AccountTransactionPageSyncJobPayloadToJSONTyped(value?: AccountTransactionPageSyncJobPayload | null, ignoreDiscriminator?: boolean): any;
