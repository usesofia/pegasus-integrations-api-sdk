"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnBankAccountCreatedPayloadRequesterOrganizationTypeEnum = exports.OnBankAccountCreatedPayloadRequesterOrganizationRoleEnum = void 0;
exports.instanceOfOnBankAccountCreatedPayloadRequesterOrganization = instanceOfOnBankAccountCreatedPayloadRequesterOrganization;
exports.OnBankAccountCreatedPayloadRequesterOrganizationFromJSON = OnBankAccountCreatedPayloadRequesterOrganizationFromJSON;
exports.OnBankAccountCreatedPayloadRequesterOrganizationFromJSONTyped = OnBankAccountCreatedPayloadRequesterOrganizationFromJSONTyped;
exports.OnBankAccountCreatedPayloadRequesterOrganizationToJSON = OnBankAccountCreatedPayloadRequesterOrganizationToJSON;
exports.OnBankAccountCreatedPayloadRequesterOrganizationToJSONTyped = OnBankAccountCreatedPayloadRequesterOrganizationToJSONTyped;
var OnBankAccountCreatedPayloadRequesterOrganizationChildrenInner_1 = require("./OnBankAccountCreatedPayloadRequesterOrganizationChildrenInner");
var OnBankAccountCreatedPayloadRequesterOrganizationParent_1 = require("./OnBankAccountCreatedPayloadRequesterOrganizationParent");
/**
 * @export
 */
exports.OnBankAccountCreatedPayloadRequesterOrganizationRoleEnum = {
    OrgAdmin: 'org:admin',
    OrgMember: 'org:member'
};
/**
 * @export
 */
exports.OnBankAccountCreatedPayloadRequesterOrganizationTypeEnum = {
    Leaf: 'LEAF',
    Group: 'GROUP'
};
/**
 * Check if a given object implements the OnBankAccountCreatedPayloadRequesterOrganization interface.
 */
function instanceOfOnBankAccountCreatedPayloadRequesterOrganization(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('role' in value) || value['role'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    return true;
}
function OnBankAccountCreatedPayloadRequesterOrganizationFromJSON(json) {
    return OnBankAccountCreatedPayloadRequesterOrganizationFromJSONTyped(json, false);
}
function OnBankAccountCreatedPayloadRequesterOrganizationFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'name': json['name'],
        'role': json['role'],
        'type': json['type'],
        'parent': json['parent'] == null ? undefined : (0, OnBankAccountCreatedPayloadRequesterOrganizationParent_1.OnBankAccountCreatedPayloadRequesterOrganizationParentFromJSON)(json['parent']),
        'children': json['children'] == null ? undefined : (json['children'].map(OnBankAccountCreatedPayloadRequesterOrganizationChildrenInner_1.OnBankAccountCreatedPayloadRequesterOrganizationChildrenInnerFromJSON)),
    };
}
function OnBankAccountCreatedPayloadRequesterOrganizationToJSON(json) {
    return OnBankAccountCreatedPayloadRequesterOrganizationToJSONTyped(json, false);
}
function OnBankAccountCreatedPayloadRequesterOrganizationToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'name': value['name'],
        'role': value['role'],
        'type': value['type'],
        'parent': (0, OnBankAccountCreatedPayloadRequesterOrganizationParent_1.OnBankAccountCreatedPayloadRequesterOrganizationParentToJSON)(value['parent']),
        'children': value['children'] == null ? undefined : (value['children'].map(OnBankAccountCreatedPayloadRequesterOrganizationChildrenInner_1.OnBankAccountCreatedPayloadRequesterOrganizationChildrenInnerToJSON)),
    };
}
