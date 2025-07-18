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
import type { ProcessEmailForForwardingIntegrationRequestBodyDtoRequester } from './ProcessEmailForForwardingIntegrationRequestBodyDtoRequester';
import {
    ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterFromJSON,
    ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterFromJSONTyped,
    ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterToJSON,
    ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterToJSONTyped,
} from './ProcessEmailForForwardingIntegrationRequestBodyDtoRequester';
import type { OnBankAccountCreatedPayloadBankAccount } from './OnBankAccountCreatedPayloadBankAccount';
import {
    OnBankAccountCreatedPayloadBankAccountFromJSON,
    OnBankAccountCreatedPayloadBankAccountFromJSONTyped,
    OnBankAccountCreatedPayloadBankAccountToJSON,
    OnBankAccountCreatedPayloadBankAccountToJSONTyped,
} from './OnBankAccountCreatedPayloadBankAccount';

/**
 * 
 * @export
 * @interface OnBankAccountCreatedPayload
 */
export interface OnBankAccountCreatedPayload {
    /**
     * 
     * @type {ProcessEmailForForwardingIntegrationRequestBodyDtoRequester}
     * @memberof OnBankAccountCreatedPayload
     */
    requester: ProcessEmailForForwardingIntegrationRequestBodyDtoRequester;
    /**
     * 
     * @type {OnBankAccountCreatedPayloadBankAccount}
     * @memberof OnBankAccountCreatedPayload
     */
    bankAccount: OnBankAccountCreatedPayloadBankAccount;
}

/**
 * Check if a given object implements the OnBankAccountCreatedPayload interface.
 */
export function instanceOfOnBankAccountCreatedPayload(value: object): value is OnBankAccountCreatedPayload {
    if (!('requester' in value) || value['requester'] === undefined) return false;
    if (!('bankAccount' in value) || value['bankAccount'] === undefined) return false;
    return true;
}

export function OnBankAccountCreatedPayloadFromJSON(json: any): OnBankAccountCreatedPayload {
    return OnBankAccountCreatedPayloadFromJSONTyped(json, false);
}

export function OnBankAccountCreatedPayloadFromJSONTyped(json: any, ignoreDiscriminator: boolean): OnBankAccountCreatedPayload {
    if (json == null) {
        return json;
    }
    return {
        
        'requester': ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterFromJSON(json['requester']),
        'bankAccount': OnBankAccountCreatedPayloadBankAccountFromJSON(json['bankAccount']),
    };
}

export function OnBankAccountCreatedPayloadToJSON(json: any): OnBankAccountCreatedPayload {
    return OnBankAccountCreatedPayloadToJSONTyped(json, false);
}

export function OnBankAccountCreatedPayloadToJSONTyped(value?: OnBankAccountCreatedPayload | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'requester': ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterToJSON(value['requester']),
        'bankAccount': OnBankAccountCreatedPayloadBankAccountToJSON(value['bankAccount']),
    };
}

