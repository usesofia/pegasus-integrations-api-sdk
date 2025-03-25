"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfOnBankAccountCreatedPayloadRequesterOrganizationParent = instanceOfOnBankAccountCreatedPayloadRequesterOrganizationParent;
exports.OnBankAccountCreatedPayloadRequesterOrganizationParentFromJSON = OnBankAccountCreatedPayloadRequesterOrganizationParentFromJSON;
exports.OnBankAccountCreatedPayloadRequesterOrganizationParentFromJSONTyped = OnBankAccountCreatedPayloadRequesterOrganizationParentFromJSONTyped;
exports.OnBankAccountCreatedPayloadRequesterOrganizationParentToJSON = OnBankAccountCreatedPayloadRequesterOrganizationParentToJSON;
exports.OnBankAccountCreatedPayloadRequesterOrganizationParentToJSONTyped = OnBankAccountCreatedPayloadRequesterOrganizationParentToJSONTyped;
/**
 * Check if a given object implements the OnBankAccountCreatedPayloadRequesterOrganizationParent interface.
 */
function instanceOfOnBankAccountCreatedPayloadRequesterOrganizationParent(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('sharedContacts' in value) || value['sharedContacts'] === undefined)
        return false;
    if (!('sharedSubcategories' in value) || value['sharedSubcategories'] === undefined)
        return false;
    if (!('sharedTags' in value) || value['sharedTags'] === undefined)
        return false;
    return true;
}
function OnBankAccountCreatedPayloadRequesterOrganizationParentFromJSON(json) {
    return OnBankAccountCreatedPayloadRequesterOrganizationParentFromJSONTyped(json, false);
}
function OnBankAccountCreatedPayloadRequesterOrganizationParentFromJSONTyped(json, ignoreDiscriminator) {
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
function OnBankAccountCreatedPayloadRequesterOrganizationParentToJSON(json) {
    return OnBankAccountCreatedPayloadRequesterOrganizationParentToJSONTyped(json, false);
}
function OnBankAccountCreatedPayloadRequesterOrganizationParentToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
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
