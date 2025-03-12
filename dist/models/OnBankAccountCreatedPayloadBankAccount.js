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
exports.OnBankAccountCreatedPayloadBankAccountProviderEnum = exports.OnBankAccountCreatedPayloadBankAccountTypeEnum = void 0;
exports.instanceOfOnBankAccountCreatedPayloadBankAccount = instanceOfOnBankAccountCreatedPayloadBankAccount;
exports.OnBankAccountCreatedPayloadBankAccountFromJSON = OnBankAccountCreatedPayloadBankAccountFromJSON;
exports.OnBankAccountCreatedPayloadBankAccountFromJSONTyped = OnBankAccountCreatedPayloadBankAccountFromJSONTyped;
exports.OnBankAccountCreatedPayloadBankAccountToJSON = OnBankAccountCreatedPayloadBankAccountToJSON;
exports.OnBankAccountCreatedPayloadBankAccountToJSONTyped = OnBankAccountCreatedPayloadBankAccountToJSONTyped;
/**
 * @export
 */
exports.OnBankAccountCreatedPayloadBankAccountTypeEnum = {
    Money: 'MONEY',
    Checking: 'CHECKING',
    Savings: 'SAVINGS',
    CreditCard: 'CREDIT_CARD',
    Application: 'APPLICATION',
    Other: 'OTHER'
};
/**
 * @export
 */
exports.OnBankAccountCreatedPayloadBankAccountProviderEnum = {
    Pluggy: 'PLUGGY',
    Other: 'OTHER'
};
/**
 * Check if a given object implements the OnBankAccountCreatedPayloadBankAccount interface.
 */
function instanceOfOnBankAccountCreatedPayloadBankAccount(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('ownerOrganization' in value) || value['ownerOrganization'] === undefined)
        return false;
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('type' in value) || value['type'] === undefined)
        return false;
    if (!('number' in value) || value['number'] === undefined)
        return false;
    if (!('isAutomatic' in value) || value['isAutomatic'] === undefined)
        return false;
    if (!('isDefault' in value) || value['isDefault'] === undefined)
        return false;
    if (!('institution' in value) || value['institution'] === undefined)
        return false;
    if (!('active' in value) || value['active'] === undefined)
        return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined)
        return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined)
        return false;
    return true;
}
function OnBankAccountCreatedPayloadBankAccountFromJSON(json) {
    return OnBankAccountCreatedPayloadBankAccountFromJSONTyped(json, false);
}
function OnBankAccountCreatedPayloadBankAccountFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'ownerOrganization': json['ownerOrganization'],
        'name': json['name'],
        'type': json['type'],
        'number': json['number'],
        'isAutomatic': json['isAutomatic'],
        'isDefault': json['isDefault'],
        'initialBalanceDate': json['initialBalanceDate'] == null ? undefined : json['initialBalanceDate'],
        'initialBalanceAmount': json['initialBalanceAmount'] == null ? undefined : json['initialBalanceAmount'],
        'institution': json['institution'],
        'active': json['active'],
        'provider': json['provider'] == null ? undefined : json['provider'],
        'providerAccountId': json['providerAccountId'] == null ? undefined : json['providerAccountId'],
        'providerItemId': json['providerItemId'] == null ? undefined : json['providerItemId'],
        'createdAt': json['createdAt'],
        'updatedAt': json['updatedAt'],
    };
}
function OnBankAccountCreatedPayloadBankAccountToJSON(json) {
    return OnBankAccountCreatedPayloadBankAccountToJSONTyped(json, false);
}
function OnBankAccountCreatedPayloadBankAccountToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'ownerOrganization': value['ownerOrganization'],
        'name': value['name'],
        'type': value['type'],
        'number': value['number'],
        'isAutomatic': value['isAutomatic'],
        'isDefault': value['isDefault'],
        'initialBalanceDate': value['initialBalanceDate'],
        'initialBalanceAmount': value['initialBalanceAmount'],
        'institution': value['institution'],
        'active': value['active'],
        'provider': value['provider'],
        'providerAccountId': value['providerAccountId'],
        'providerItemId': value['providerItemId'],
        'createdAt': value['createdAt'],
        'updatedAt': value['updatedAt'],
    };
}
