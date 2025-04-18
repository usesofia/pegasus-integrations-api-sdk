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
 * @interface OnBankAccountCreatedPayloadBankAccount
 */
export interface OnBankAccountCreatedPayloadBankAccount {
    /**
     * Identificador da conta bancária.
     * @type {string}
     * @memberof OnBankAccountCreatedPayloadBankAccount
     */
    id: string;
    /**
     * Identificador da organização dona da conta bancária.
     * @type {string}
     * @memberof OnBankAccountCreatedPayloadBankAccount
     */
    ownerOrganization: string;
    /**
     * Nome da conta bancária.
     * @type {string}
     * @memberof OnBankAccountCreatedPayloadBankAccount
     */
    name: string;
    /**
     * Tipo da conta bancária.
     * @type {string}
     * @memberof OnBankAccountCreatedPayloadBankAccount
     */
    type: OnBankAccountCreatedPayloadBankAccountTypeEnum;
    /**
     * Número da conta ou cartão.
     * @type {string}
     * @memberof OnBankAccountCreatedPayloadBankAccount
     */
    number: string;
    /**
     * Indica se a conta é automática ou manual.
     * @type {boolean}
     * @memberof OnBankAccountCreatedPayloadBankAccount
     */
    isAutomatic: boolean;
    /**
     * Indica se a conta é a padrão.
     * @type {boolean}
     * @memberof OnBankAccountCreatedPayloadBankAccount
     */
    isDefault: boolean;
    /**
     * Data do saldo inicial.
     * @type {any}
     * @memberof OnBankAccountCreatedPayloadBankAccount
     */
    initialBalanceDate?: any | null;
    /**
     * Valor do saldo inicial.
     * @type {number}
     * @memberof OnBankAccountCreatedPayloadBankAccount
     */
    initialBalanceAmount?: number | null;
    /**
     * Instituição financeira.
     * @type {string}
     * @memberof OnBankAccountCreatedPayloadBankAccount
     */
    institution: string;
    /**
     * Indica se a conta está ativa.
     * @type {boolean}
     * @memberof OnBankAccountCreatedPayloadBankAccount
     */
    active: boolean;
    /**
     * Fornecedor da conta bancária.
     * @type {string}
     * @memberof OnBankAccountCreatedPayloadBankAccount
     */
    provider?: OnBankAccountCreatedPayloadBankAccountProviderEnum | null;
    /**
     * Identificador da conta bancária no fornecedor.
     * @type {string}
     * @memberof OnBankAccountCreatedPayloadBankAccount
     */
    providerAccountId?: string | null;
    /**
     * Identificador do item de conexão do fornecedor.
     * @type {string}
     * @memberof OnBankAccountCreatedPayloadBankAccount
     */
    providerItemId?: string | null;
    /**
     * Data de criação da conta bancária.
     * @type {any}
     * @memberof OnBankAccountCreatedPayloadBankAccount
     */
    createdAt: any | null;
    /**
     * Data de atualização da conta bancária.
     * @type {any}
     * @memberof OnBankAccountCreatedPayloadBankAccount
     */
    updatedAt: any | null;
}


/**
 * @export
 */
export const OnBankAccountCreatedPayloadBankAccountTypeEnum = {
    Money: 'MONEY',
    Checking: 'CHECKING',
    Savings: 'SAVINGS',
    CreditCard: 'CREDIT_CARD',
    Application: 'APPLICATION',
    Other: 'OTHER'
} as const;
export type OnBankAccountCreatedPayloadBankAccountTypeEnum = typeof OnBankAccountCreatedPayloadBankAccountTypeEnum[keyof typeof OnBankAccountCreatedPayloadBankAccountTypeEnum];

/**
 * @export
 */
export const OnBankAccountCreatedPayloadBankAccountProviderEnum = {
    Pluggy: 'PLUGGY',
    Other: 'OTHER'
} as const;
export type OnBankAccountCreatedPayloadBankAccountProviderEnum = typeof OnBankAccountCreatedPayloadBankAccountProviderEnum[keyof typeof OnBankAccountCreatedPayloadBankAccountProviderEnum];


/**
 * Check if a given object implements the OnBankAccountCreatedPayloadBankAccount interface.
 */
export function instanceOfOnBankAccountCreatedPayloadBankAccount(value: object): value is OnBankAccountCreatedPayloadBankAccount {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('ownerOrganization' in value) || value['ownerOrganization'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('number' in value) || value['number'] === undefined) return false;
    if (!('isAutomatic' in value) || value['isAutomatic'] === undefined) return false;
    if (!('isDefault' in value) || value['isDefault'] === undefined) return false;
    if (!('institution' in value) || value['institution'] === undefined) return false;
    if (!('active' in value) || value['active'] === undefined) return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined) return false;
    if (!('updatedAt' in value) || value['updatedAt'] === undefined) return false;
    return true;
}

export function OnBankAccountCreatedPayloadBankAccountFromJSON(json: any): OnBankAccountCreatedPayloadBankAccount {
    return OnBankAccountCreatedPayloadBankAccountFromJSONTyped(json, false);
}

export function OnBankAccountCreatedPayloadBankAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): OnBankAccountCreatedPayloadBankAccount {
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

export function OnBankAccountCreatedPayloadBankAccountToJSON(json: any): OnBankAccountCreatedPayloadBankAccount {
    return OnBankAccountCreatedPayloadBankAccountToJSONTyped(json, false);
}

export function OnBankAccountCreatedPayloadBankAccountToJSONTyped(value?: OnBankAccountCreatedPayloadBankAccount | null, ignoreDiscriminator: boolean = false): any {
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

