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
 * 
 * @export
 * @interface CreateConnectTokenRequestBodyDto
 */
export interface CreateConnectTokenRequestBodyDto {
    /**
     * 
     * @type {string}
     * @memberof CreateConnectTokenRequestBodyDto
     */
    itemId?: string;
}

/**
 * Check if a given object implements the CreateConnectTokenRequestBodyDto interface.
 */
export function instanceOfCreateConnectTokenRequestBodyDto(value: object): value is CreateConnectTokenRequestBodyDto {
    return true;
}

export function CreateConnectTokenRequestBodyDtoFromJSON(json: any): CreateConnectTokenRequestBodyDto {
    return CreateConnectTokenRequestBodyDtoFromJSONTyped(json, false);
}

export function CreateConnectTokenRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateConnectTokenRequestBodyDto {
    if (json == null) {
        return json;
    }
    return {
        
        'itemId': json['itemId'] == null ? undefined : json['itemId'],
    };
}

export function CreateConnectTokenRequestBodyDtoToJSON(json: any): CreateConnectTokenRequestBodyDto {
    return CreateConnectTokenRequestBodyDtoToJSONTyped(json, false);
}

export function CreateConnectTokenRequestBodyDtoToJSONTyped(value?: CreateConnectTokenRequestBodyDto | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'itemId': value['itemId'],
    };
}

