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
import type { AccountLastSuccessSyncEntity, AccountTransactionsSyncJobPayload, OnBankAccountCreatedPayload, RawAccountEntity } from '../models/index';
export interface FindAllAccountsRequest {
    itemId: string;
}
export interface GetLastAccountSuccessSyncRequest {
    accountId: string;
}
export interface StartAccountTransactionsSyncRequest {
    onBankAccountCreatedPayload: OnBankAccountCreatedPayload;
}
export interface SyncAccountTransactionsRequest {
    accountTransactionsSyncJobPayload: AccountTransactionsSyncJobPayload;
}
/**
 * AccountsApi - interface
 *
 * @export
 * @interface AccountsApiInterface
 */
export interface AccountsApiInterface {
    /**
     *
     * @summary Find all accounts for a given item
     * @param {string} itemId The item id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiInterface
     */
    findAllAccountsRaw(requestParameters: FindAllAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RawAccountEntity>>>;
    /**
     * Find all accounts for a given item
     */
    findAllAccounts(requestParameters: FindAllAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RawAccountEntity>>;
    /**
     *
     * @summary Get the last successful sync date for an account
     * @param {string} accountId The sofia account id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiInterface
     */
    getLastAccountSuccessSyncRaw(requestParameters: GetLastAccountSuccessSyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountLastSuccessSyncEntity>>;
    /**
     * Get the last successful sync date for an account
     */
    getLastAccountSuccessSync(requestParameters: GetLastAccountSuccessSyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountLastSuccessSyncEntity>;
    /**
     *
     * @summary Start account transactions sync
     * @param {OnBankAccountCreatedPayload} onBankAccountCreatedPayload
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiInterface
     */
    startAccountTransactionsSyncRaw(requestParameters: StartAccountTransactionsSyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Start account transactions sync
     */
    startAccountTransactionsSync(requestParameters: StartAccountTransactionsSyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     *
     * @summary Process account transactions sync job
     * @param {AccountTransactionsSyncJobPayload} accountTransactionsSyncJobPayload
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiInterface
     */
    syncAccountTransactionsRaw(requestParameters: SyncAccountTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Process account transactions sync job
     */
    syncAccountTransactions(requestParameters: SyncAccountTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
/**
 *
 */
export declare class AccountsApi extends runtime.BaseAPI implements AccountsApiInterface {
    /**
     * Find all accounts for a given item
     */
    findAllAccountsRaw(requestParameters: FindAllAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RawAccountEntity>>>;
    /**
     * Find all accounts for a given item
     */
    findAllAccounts(requestParameters: FindAllAccountsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RawAccountEntity>>;
    /**
     * Get the last successful sync date for an account
     */
    getLastAccountSuccessSyncRaw(requestParameters: GetLastAccountSuccessSyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountLastSuccessSyncEntity>>;
    /**
     * Get the last successful sync date for an account
     */
    getLastAccountSuccessSync(requestParameters: GetLastAccountSuccessSyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountLastSuccessSyncEntity>;
    /**
     * Start account transactions sync
     */
    startAccountTransactionsSyncRaw(requestParameters: StartAccountTransactionsSyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Start account transactions sync
     */
    startAccountTransactionsSync(requestParameters: StartAccountTransactionsSyncRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
    /**
     * Process account transactions sync job
     */
    syncAccountTransactionsRaw(requestParameters: SyncAccountTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Process account transactions sync job
     */
    syncAccountTransactions(requestParameters: SyncAccountTransactionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
