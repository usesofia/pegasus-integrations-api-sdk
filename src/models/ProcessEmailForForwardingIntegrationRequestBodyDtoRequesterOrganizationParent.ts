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
 * @interface ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent
 */
export interface ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent {
    /**
     * 
     * @type {string}
     * @memberof ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent
     */
    name: string;
    /**
     * 
     * @type {boolean}
     * @memberof ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent
     */
    sharedContacts: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent
     */
    sharedSubcategories: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent
     */
    sharedTags: boolean;
}

/**
 * Check if a given object implements the ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent interface.
 */
export function instanceOfProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent(value: object): value is ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('sharedContacts' in value) || value['sharedContacts'] === undefined) return false;
    if (!('sharedSubcategories' in value) || value['sharedSubcategories'] === undefined) return false;
    if (!('sharedTags' in value) || value['sharedTags'] === undefined) return false;
    return true;
}

export function ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParentFromJSON(json: any): ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent {
    return ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParentFromJSONTyped(json, false);
}

export function ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'sharedContacts': json['sharedContacts'],
        'sharedSubcategories': json['sharedSubcategories'],
        'sharedTags': json['sharedTags'],
    };
}

export function ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParentToJSON(json: any): ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent {
    return ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParentToJSONTyped(json, false);
}

export function ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParentToJSONTyped(value?: ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'sharedContacts': value['sharedContacts'],
        'sharedSubcategories': value['sharedSubcategories'],
        'sharedTags': value['sharedTags'],
    };
}

