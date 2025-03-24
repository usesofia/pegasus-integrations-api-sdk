/* tslint:disable */
/* eslint-disable */
/**
 * Sofia Pegasus integrations-api
 * Api principal do sistema Pegasus para integração com outros sistemas.
 *
 * The version of the OpenAPI document: 1.1.1
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
 * @interface ExceptionResponseEntityErrorsInner
 */
export interface ExceptionResponseEntityErrorsInner {
    /**
     * 
     * @type {string}
     * @memberof ExceptionResponseEntityErrorsInner
     */
    fieldPath: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ExceptionResponseEntityErrorsInner
     */
    messages: Array<string>;
}

/**
 * Check if a given object implements the ExceptionResponseEntityErrorsInner interface.
 */
export function instanceOfExceptionResponseEntityErrorsInner(value: object): value is ExceptionResponseEntityErrorsInner {
    if (!('fieldPath' in value) || value['fieldPath'] === undefined) return false;
    if (!('messages' in value) || value['messages'] === undefined) return false;
    return true;
}

export function ExceptionResponseEntityErrorsInnerFromJSON(json: any): ExceptionResponseEntityErrorsInner {
    return ExceptionResponseEntityErrorsInnerFromJSONTyped(json, false);
}

export function ExceptionResponseEntityErrorsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExceptionResponseEntityErrorsInner {
    if (json == null) {
        return json;
    }
    return {
        
        'fieldPath': json['fieldPath'],
        'messages': json['messages'],
    };
}

export function ExceptionResponseEntityErrorsInnerToJSON(json: any): ExceptionResponseEntityErrorsInner {
    return ExceptionResponseEntityErrorsInnerToJSONTyped(json, false);
}

export function ExceptionResponseEntityErrorsInnerToJSONTyped(value?: ExceptionResponseEntityErrorsInner | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'fieldPath': value['fieldPath'],
        'messages': value['messages'],
    };
}

