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
import type { RawAccountEntityConnector } from './RawAccountEntityConnector';
import {
    RawAccountEntityConnectorFromJSON,
    RawAccountEntityConnectorFromJSONTyped,
    RawAccountEntityConnectorToJSON,
    RawAccountEntityConnectorToJSONTyped,
} from './RawAccountEntityConnector';

/**
 * 
 * @export
 * @interface RawAccountEntity
 */
export interface RawAccountEntity {
    /**
     * 
     * @type {string}
     * @memberof RawAccountEntity
     */
    provider: RawAccountEntityProviderEnum;
    /**
     * 
     * @type {string}
     * @memberof RawAccountEntity
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof RawAccountEntity
     */
    type: RawAccountEntityTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RawAccountEntity
     */
    subtype: RawAccountEntitySubtypeEnum;
    /**
     * 
     * @type {string}
     * @memberof RawAccountEntity
     */
    number: string;
    /**
     * 
     * @type {string}
     * @memberof RawAccountEntity
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RawAccountEntity
     */
    balance: string;
    /**
     * 
     * @type {string}
     * @memberof RawAccountEntity
     */
    currencyCode: RawAccountEntityCurrencyCodeEnum;
    /**
     * 
     * @type {RawAccountEntityConnector}
     * @memberof RawAccountEntity
     */
    connector: RawAccountEntityConnector;
}


/**
 * @export
 */
export const RawAccountEntityProviderEnum = {
    Pluggy: 'PLUGGY',
    Other: 'OTHER'
} as const;
export type RawAccountEntityProviderEnum = typeof RawAccountEntityProviderEnum[keyof typeof RawAccountEntityProviderEnum];

/**
 * @export
 */
export const RawAccountEntityTypeEnum = {
    Bank: 'BANK',
    Credit: 'CREDIT'
} as const;
export type RawAccountEntityTypeEnum = typeof RawAccountEntityTypeEnum[keyof typeof RawAccountEntityTypeEnum];

/**
 * @export
 */
export const RawAccountEntitySubtypeEnum = {
    CheckingAccount: 'CHECKING_ACCOUNT',
    SavingsAccount: 'SAVINGS_ACCOUNT',
    CreditCard: 'CREDIT_CARD'
} as const;
export type RawAccountEntitySubtypeEnum = typeof RawAccountEntitySubtypeEnum[keyof typeof RawAccountEntitySubtypeEnum];

/**
 * @export
 */
export const RawAccountEntityCurrencyCodeEnum = {
    Aed: 'AED',
    Afn: 'AFN',
    All: 'ALL',
    Amd: 'AMD',
    Ang: 'ANG',
    Aoa: 'AOA',
    Ars: 'ARS',
    Aud: 'AUD',
    Awg: 'AWG',
    Azn: 'AZN',
    Bam: 'BAM',
    Bbd: 'BBD',
    Bdt: 'BDT',
    Bgn: 'BGN',
    Bhd: 'BHD',
    Bif: 'BIF',
    Bmd: 'BMD',
    Bnd: 'BND',
    Bob: 'BOB',
    Bov: 'BOV',
    Brl: 'BRL',
    Bsd: 'BSD',
    Btn: 'BTN',
    Bwp: 'BWP',
    Byn: 'BYN',
    Bzd: 'BZD',
    Cad: 'CAD',
    Cdf: 'CDF',
    Che: 'CHE',
    Chf: 'CHF',
    Chw: 'CHW',
    Clf: 'CLF',
    Clp: 'CLP',
    Cop: 'COP',
    Cou: 'COU',
    Crc: 'CRC',
    Cup: 'CUP',
    Cve: 'CVE',
    Czk: 'CZK',
    Djf: 'DJF',
    Dkk: 'DKK',
    Dop: 'DOP',
    Dzd: 'DZD',
    Egp: 'EGP',
    Ern: 'ERN',
    Etb: 'ETB',
    Eur: 'EUR',
    Fjd: 'FJD',
    Fkp: 'FKP',
    Gbp: 'GBP',
    Gel: 'GEL',
    Ghs: 'GHS',
    Gip: 'GIP',
    Gmd: 'GMD',
    Gnf: 'GNF',
    Gtq: 'GTQ',
    Gyd: 'GYD',
    Hkd: 'HKD',
    Hnl: 'HNL',
    Htg: 'HTG',
    Huf: 'HUF',
    Idr: 'IDR',
    Ils: 'ILS',
    Inr: 'INR',
    Iqd: 'IQD',
    Irr: 'IRR',
    Isk: 'ISK',
    Jmd: 'JMD',
    Jod: 'JOD',
    Jpy: 'JPY',
    Kes: 'KES',
    Kgs: 'KGS',
    Khr: 'KHR',
    Kmf: 'KMF',
    Kpw: 'KPW',
    Krw: 'KRW',
    Kwd: 'KWD',
    Kyd: 'KYD',
    Kzt: 'KZT',
    Lak: 'LAK',
    Lbp: 'LBP',
    Lkr: 'LKR',
    Lrd: 'LRD',
    Lsl: 'LSL',
    Lyd: 'LYD',
    Mad: 'MAD',
    Mdl: 'MDL',
    Mga: 'MGA',
    Mkd: 'MKD',
    Mmk: 'MMK',
    Mnt: 'MNT',
    Mop: 'MOP',
    Mru: 'MRU',
    Mur: 'MUR',
    Mvr: 'MVR',
    Mwk: 'MWK',
    Mxn: 'MXN',
    Mxv: 'MXV',
    Myr: 'MYR',
    Mzn: 'MZN',
    Nad: 'NAD',
    Ngn: 'NGN',
    Nio: 'NIO',
    Nok: 'NOK',
    Npr: 'NPR',
    Nzd: 'NZD',
    Omr: 'OMR',
    Pab: 'PAB',
    Pen: 'PEN',
    Pgk: 'PGK',
    Php: 'PHP',
    Pkr: 'PKR',
    Pln: 'PLN',
    Pyg: 'PYG',
    Qar: 'QAR',
    Ron: 'RON',
    Rsd: 'RSD',
    Cny: 'CNY',
    Rub: 'RUB',
    Rwf: 'RWF',
    Sar: 'SAR',
    Sbd: 'SBD',
    Scr: 'SCR',
    Sdg: 'SDG',
    Sek: 'SEK',
    Sgd: 'SGD',
    Shp: 'SHP',
    Sle: 'SLE',
    Sll: 'SLL',
    Sos: 'SOS',
    Srd: 'SRD',
    Ssp: 'SSP',
    Stn: 'STN',
    Svc: 'SVC',
    Syp: 'SYP',
    Szl: 'SZL',
    Thb: 'THB',
    Tjs: 'TJS',
    Tmt: 'TMT',
    Tnd: 'TND',
    Top: 'TOP',
    Try: 'TRY',
    Ttd: 'TTD',
    Twd: 'TWD',
    Tzs: 'TZS',
    Uah: 'UAH',
    Ugx: 'UGX',
    Usd: 'USD',
    Usn: 'USN',
    Uyi: 'UYI',
    Uyu: 'UYU',
    Uyw: 'UYW',
    Uzs: 'UZS',
    Ved: 'VED',
    Ves: 'VES',
    Vnd: 'VND',
    Vuv: 'VUV',
    Wst: 'WST',
    Xaf: 'XAF',
    Xag: 'XAG',
    Xau: 'XAU',
    Xba: 'XBA',
    Xbb: 'XBB',
    Xbc: 'XBC',
    Xbd: 'XBD',
    Xcd: 'XCD',
    Xdr: 'XDR',
    Xof: 'XOF',
    Xpd: 'XPD',
    Xpf: 'XPF',
    Xpt: 'XPT',
    Xsu: 'XSU',
    Xts: 'XTS',
    Xua: 'XUA',
    Xxx: 'XXX',
    Yer: 'YER',
    Zar: 'ZAR',
    Zmw: 'ZMW',
    Zwl: 'ZWL'
} as const;
export type RawAccountEntityCurrencyCodeEnum = typeof RawAccountEntityCurrencyCodeEnum[keyof typeof RawAccountEntityCurrencyCodeEnum];


/**
 * Check if a given object implements the RawAccountEntity interface.
 */
export function instanceOfRawAccountEntity(value: object): value is RawAccountEntity {
    if (!('provider' in value) || value['provider'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('subtype' in value) || value['subtype'] === undefined) return false;
    if (!('number' in value) || value['number'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('balance' in value) || value['balance'] === undefined) return false;
    if (!('currencyCode' in value) || value['currencyCode'] === undefined) return false;
    if (!('connector' in value) || value['connector'] === undefined) return false;
    return true;
}

export function RawAccountEntityFromJSON(json: any): RawAccountEntity {
    return RawAccountEntityFromJSONTyped(json, false);
}

export function RawAccountEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawAccountEntity {
    if (json == null) {
        return json;
    }
    return {
        
        'provider': json['provider'],
        'id': json['id'],
        'type': json['type'],
        'subtype': json['subtype'],
        'number': json['number'],
        'name': json['name'],
        'balance': json['balance'],
        'currencyCode': json['currencyCode'],
        'connector': RawAccountEntityConnectorFromJSON(json['connector']),
    };
}

export function RawAccountEntityToJSON(json: any): RawAccountEntity {
    return RawAccountEntityToJSONTyped(json, false);
}

export function RawAccountEntityToJSONTyped(value?: RawAccountEntity | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'provider': value['provider'],
        'id': value['id'],
        'type': value['type'],
        'subtype': value['subtype'],
        'number': value['number'],
        'name': value['name'],
        'balance': value['balance'],
        'currencyCode': value['currencyCode'],
        'connector': RawAccountEntityConnectorToJSON(value['connector']),
    };
}

