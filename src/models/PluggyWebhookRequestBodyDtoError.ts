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

import { mapValues } from '../runtime';
/**
 * Error details in case of item/error event
 * @export
 * @interface PluggyWebhookRequestBodyDtoError
 */
export interface PluggyWebhookRequestBodyDtoError {
    /**
     * 
     * @type {string}
     * @memberof PluggyWebhookRequestBodyDtoError
     */
    code: string;
    /**
     * 
     * @type {string}
     * @memberof PluggyWebhookRequestBodyDtoError
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof PluggyWebhookRequestBodyDtoError
     */
    parameter?: string;
}

/**
 * Check if a given object implements the PluggyWebhookRequestBodyDtoError interface.
 */
export function instanceOfPluggyWebhookRequestBodyDtoError(value: object): value is PluggyWebhookRequestBodyDtoError {
    if (!('code' in value) || value['code'] === undefined) return false;
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function PluggyWebhookRequestBodyDtoErrorFromJSON(json: any): PluggyWebhookRequestBodyDtoError {
    return PluggyWebhookRequestBodyDtoErrorFromJSONTyped(json, false);
}

export function PluggyWebhookRequestBodyDtoErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): PluggyWebhookRequestBodyDtoError {
    if (json == null) {
        return json;
    }
    return {
        
        'code': json['code'],
        'message': json['message'],
        'parameter': json['parameter'] == null ? undefined : json['parameter'],
    };
}

export function PluggyWebhookRequestBodyDtoErrorToJSON(json: any): PluggyWebhookRequestBodyDtoError {
    return PluggyWebhookRequestBodyDtoErrorToJSONTyped(json, false);
}

export function PluggyWebhookRequestBodyDtoErrorToJSONTyped(value?: PluggyWebhookRequestBodyDtoError | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'code': value['code'],
        'message': value['message'],
        'parameter': value['parameter'],
    };
}

