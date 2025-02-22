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
import * as runtime from '../runtime';
/**
 * PluggyApi - interface
 *
 * @export
 * @interface PluggyApiInterface
 */
export interface PluggyApiInterface {
    /**
     *
     * @summary Create a connect token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PluggyApiInterface
     */
    createConnectTokenRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Create a connect token
     */
    createConnectToken(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
/**
 *
 */
export declare class PluggyApi extends runtime.BaseAPI implements PluggyApiInterface {
    /**
     * Create a connect token
     */
    createConnectTokenRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>>;
    /**
     * Create a connect token
     */
    createConnectToken(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void>;
}
