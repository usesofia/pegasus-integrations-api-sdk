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
import type { OnBankAccountCreatedPayloadRequesterOrganization } from './OnBankAccountCreatedPayloadRequesterOrganization';
import {
    OnBankAccountCreatedPayloadRequesterOrganizationFromJSON,
    OnBankAccountCreatedPayloadRequesterOrganizationFromJSONTyped,
    OnBankAccountCreatedPayloadRequesterOrganizationToJSON,
    OnBankAccountCreatedPayloadRequesterOrganizationToJSONTyped,
} from './OnBankAccountCreatedPayloadRequesterOrganization';

/**
 * 
 * @export
 * @interface OnBankAccountCreatedPayloadRequester
 */
export interface OnBankAccountCreatedPayloadRequester {
    /**
     * 
     * @type {string}
     * @memberof OnBankAccountCreatedPayloadRequester
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof OnBankAccountCreatedPayloadRequester
     */
    primaryEmail: string;
    /**
     * 
     * @type {string}
     * @memberof OnBankAccountCreatedPayloadRequester
     */
    primaryPhoneNumber: string;
    /**
     * 
     * @type {string}
     * @memberof OnBankAccountCreatedPayloadRequester
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof OnBankAccountCreatedPayloadRequester
     */
    lastName: string;
    /**
     * 
     * @type {OnBankAccountCreatedPayloadRequesterOrganization}
     * @memberof OnBankAccountCreatedPayloadRequester
     */
    organization?: OnBankAccountCreatedPayloadRequesterOrganization | null;
}

/**
 * Check if a given object implements the OnBankAccountCreatedPayloadRequester interface.
 */
export function instanceOfOnBankAccountCreatedPayloadRequester(value: object): value is OnBankAccountCreatedPayloadRequester {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('primaryEmail' in value) || value['primaryEmail'] === undefined) return false;
    if (!('primaryPhoneNumber' in value) || value['primaryPhoneNumber'] === undefined) return false;
    if (!('firstName' in value) || value['firstName'] === undefined) return false;
    if (!('lastName' in value) || value['lastName'] === undefined) return false;
    return true;
}

export function OnBankAccountCreatedPayloadRequesterFromJSON(json: any): OnBankAccountCreatedPayloadRequester {
    return OnBankAccountCreatedPayloadRequesterFromJSONTyped(json, false);
}

export function OnBankAccountCreatedPayloadRequesterFromJSONTyped(json: any, ignoreDiscriminator: boolean): OnBankAccountCreatedPayloadRequester {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'primaryEmail': json['primaryEmail'],
        'primaryPhoneNumber': json['primaryPhoneNumber'],
        'firstName': json['firstName'],
        'lastName': json['lastName'],
        'organization': json['organization'] == null ? undefined : OnBankAccountCreatedPayloadRequesterOrganizationFromJSON(json['organization']),
    };
}

export function OnBankAccountCreatedPayloadRequesterToJSON(json: any): OnBankAccountCreatedPayloadRequester {
    return OnBankAccountCreatedPayloadRequesterToJSONTyped(json, false);
}

export function OnBankAccountCreatedPayloadRequesterToJSONTyped(value?: OnBankAccountCreatedPayloadRequester | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'primaryEmail': value['primaryEmail'],
        'primaryPhoneNumber': value['primaryPhoneNumber'],
        'firstName': value['firstName'],
        'lastName': value['lastName'],
        'organization': OnBankAccountCreatedPayloadRequesterOrganizationToJSON(value['organization']),
    };
}

