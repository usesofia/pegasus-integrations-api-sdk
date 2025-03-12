/* tslint:disable */
/* eslint-disable */
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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface OnBankAccountCreatedPayloadRequesterOrganizationChildrenInner
 */
export interface OnBankAccountCreatedPayloadRequesterOrganizationChildrenInner {
    /**
     * 
     * @type {string}
     * @memberof OnBankAccountCreatedPayloadRequesterOrganizationChildrenInner
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof OnBankAccountCreatedPayloadRequesterOrganizationChildrenInner
     */
    name: string;
}

/**
 * Check if a given object implements the OnBankAccountCreatedPayloadRequesterOrganizationChildrenInner interface.
 */
export function instanceOfOnBankAccountCreatedPayloadRequesterOrganizationChildrenInner(value: object): value is OnBankAccountCreatedPayloadRequesterOrganizationChildrenInner {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function OnBankAccountCreatedPayloadRequesterOrganizationChildrenInnerFromJSON(json: any): OnBankAccountCreatedPayloadRequesterOrganizationChildrenInner {
    return OnBankAccountCreatedPayloadRequesterOrganizationChildrenInnerFromJSONTyped(json, false);
}

export function OnBankAccountCreatedPayloadRequesterOrganizationChildrenInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): OnBankAccountCreatedPayloadRequesterOrganizationChildrenInner {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
    };
}

export function OnBankAccountCreatedPayloadRequesterOrganizationChildrenInnerToJSON(json: any): OnBankAccountCreatedPayloadRequesterOrganizationChildrenInner {
    return OnBankAccountCreatedPayloadRequesterOrganizationChildrenInnerToJSONTyped(json, false);
}

export function OnBankAccountCreatedPayloadRequesterOrganizationChildrenInnerToJSONTyped(value?: OnBankAccountCreatedPayloadRequesterOrganizationChildrenInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
    };
}

