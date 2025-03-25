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
exports.instanceOfOnBankAccountCreatedPayloadRequester = instanceOfOnBankAccountCreatedPayloadRequester;
exports.OnBankAccountCreatedPayloadRequesterFromJSON = OnBankAccountCreatedPayloadRequesterFromJSON;
exports.OnBankAccountCreatedPayloadRequesterFromJSONTyped = OnBankAccountCreatedPayloadRequesterFromJSONTyped;
exports.OnBankAccountCreatedPayloadRequesterToJSON = OnBankAccountCreatedPayloadRequesterToJSON;
exports.OnBankAccountCreatedPayloadRequesterToJSONTyped = OnBankAccountCreatedPayloadRequesterToJSONTyped;
var OnBankAccountCreatedPayloadRequesterOrganization_1 = require("./OnBankAccountCreatedPayloadRequesterOrganization");
/**
 * Check if a given object implements the OnBankAccountCreatedPayloadRequester interface.
 */
function instanceOfOnBankAccountCreatedPayloadRequester(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('primaryEmail' in value) || value['primaryEmail'] === undefined)
        return false;
    if (!('primaryPhoneNumber' in value) || value['primaryPhoneNumber'] === undefined)
        return false;
    if (!('firstName' in value) || value['firstName'] === undefined)
        return false;
    if (!('lastName' in value) || value['lastName'] === undefined)
        return false;
    return true;
}
function OnBankAccountCreatedPayloadRequesterFromJSON(json) {
    return OnBankAccountCreatedPayloadRequesterFromJSONTyped(json, false);
}
function OnBankAccountCreatedPayloadRequesterFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'primaryEmail': json['primaryEmail'],
        'primaryPhoneNumber': json['primaryPhoneNumber'],
        'firstName': json['firstName'],
        'lastName': json['lastName'],
        'organization': json['organization'] == null ? undefined : (0, OnBankAccountCreatedPayloadRequesterOrganization_1.OnBankAccountCreatedPayloadRequesterOrganizationFromJSON)(json['organization']),
    };
}
function OnBankAccountCreatedPayloadRequesterToJSON(json) {
    return OnBankAccountCreatedPayloadRequesterToJSONTyped(json, false);
}
function OnBankAccountCreatedPayloadRequesterToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'primaryEmail': value['primaryEmail'],
        'primaryPhoneNumber': value['primaryPhoneNumber'],
        'firstName': value['firstName'],
        'lastName': value['lastName'],
        'organization': (0, OnBankAccountCreatedPayloadRequesterOrganization_1.OnBankAccountCreatedPayloadRequesterOrganizationToJSON)(value['organization']),
    };
}
