/**
 * Sofia Pegasus integrations-api
 * Api principal do sistema Pegasus para integração com outros sistemas.
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface AccountTransactionsSyncJobPayload
 */
export interface AccountTransactionsSyncJobPayload {
    /**
     *
     * @type {any}
     * @memberof AccountTransactionsSyncJobPayload
     */
    requester: any | null;
    /**
     *
     * @type {string}
     * @memberof AccountTransactionsSyncJobPayload
     */
    accountTransactionsSyncJobRequestId: string;
}
/**
 * Check if a given object implements the AccountTransactionsSyncJobPayload interface.
 */
export declare function instanceOfAccountTransactionsSyncJobPayload(value: object): value is AccountTransactionsSyncJobPayload;
export declare function AccountTransactionsSyncJobPayloadFromJSON(json: any): AccountTransactionsSyncJobPayload;
export declare function AccountTransactionsSyncJobPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountTransactionsSyncJobPayload;
export declare function AccountTransactionsSyncJobPayloadToJSON(json: any): AccountTransactionsSyncJobPayload;
export declare function AccountTransactionsSyncJobPayloadToJSONTyped(value?: AccountTransactionsSyncJobPayload | null, ignoreDiscriminator?: boolean): any;
