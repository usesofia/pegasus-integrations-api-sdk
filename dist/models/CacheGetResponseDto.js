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
exports.instanceOfCacheGetResponseDto = instanceOfCacheGetResponseDto;
exports.CacheGetResponseDtoFromJSON = CacheGetResponseDtoFromJSON;
exports.CacheGetResponseDtoFromJSONTyped = CacheGetResponseDtoFromJSONTyped;
exports.CacheGetResponseDtoToJSON = CacheGetResponseDtoToJSON;
exports.CacheGetResponseDtoToJSONTyped = CacheGetResponseDtoToJSONTyped;
/**
 * Check if a given object implements the CacheGetResponseDto interface.
 */
function instanceOfCacheGetResponseDto(value) {
    if (!('value' in value) || value['value'] === undefined)
        return false;
    return true;
}
function CacheGetResponseDtoFromJSON(json) {
    return CacheGetResponseDtoFromJSONTyped(json, false);
}
function CacheGetResponseDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'value': json['value'],
    };
}
function CacheGetResponseDtoToJSON(json) {
    return CacheGetResponseDtoToJSONTyped(json, false);
}
function CacheGetResponseDtoToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'value': value['value'],
    };
}
