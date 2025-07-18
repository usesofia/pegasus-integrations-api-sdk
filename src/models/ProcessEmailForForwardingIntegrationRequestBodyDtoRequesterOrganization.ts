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
import type { ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationChildrenInner } from './ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationChildrenInner';
import {
    ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationChildrenInnerFromJSON,
    ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationChildrenInnerFromJSONTyped,
    ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationChildrenInnerToJSON,
    ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationChildrenInnerToJSONTyped,
} from './ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationChildrenInner';
import type { ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent } from './ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent';
import {
    ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParentFromJSON,
    ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParentFromJSONTyped,
    ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParentToJSON,
    ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParentToJSONTyped,
} from './ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent';

/**
 * 
 * @export
 * @interface ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization
 */
export interface ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization {
    /**
     * 
     * @type {string}
     * @memberof ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization
     */
    type: ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization
     */
    role: ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationRoleEnum;
    /**
     * 
     * @type {ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent}
     * @memberof ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization
     */
    parent?: ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParent | null;
    /**
     * 
     * @type {Array<ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationChildrenInner>}
     * @memberof ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization
     */
    children?: Array<ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationChildrenInner> | null;
}


/**
 * @export
 */
export const ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationTypeEnum = {
    Leaf: 'LEAF',
    Group: 'GROUP'
} as const;
export type ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationTypeEnum = typeof ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationTypeEnum[keyof typeof ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationTypeEnum];

/**
 * @export
 */
export const ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationRoleEnum = {
    OrgAdmin: 'org:admin',
    OrgMember: 'org:member'
} as const;
export type ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationRoleEnum = typeof ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationRoleEnum[keyof typeof ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationRoleEnum];


/**
 * Check if a given object implements the ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization interface.
 */
export function instanceOfProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization(value: object): value is ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('role' in value) || value['role'] === undefined) return false;
    return true;
}

export function ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationFromJSON(json: any): ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization {
    return ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationFromJSONTyped(json, false);
}

export function ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'type': json['type'],
        'role': json['role'],
        'parent': json['parent'] == null ? undefined : ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParentFromJSON(json['parent']),
        'children': json['children'] == null ? undefined : ((json['children'] as Array<any>).map(ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationChildrenInnerFromJSON)),
    };
}

export function ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationToJSON(json: any): ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization {
    return ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationToJSONTyped(json, false);
}

export function ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationToJSONTyped(value?: ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganization | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'name': value['name'],
        'type': value['type'],
        'role': value['role'],
        'parent': ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationParentToJSON(value['parent']),
        'children': value['children'] == null ? undefined : ((value['children'] as Array<any>).map(ProcessEmailForForwardingIntegrationRequestBodyDtoRequesterOrganizationChildrenInnerToJSON)),
    };
}

