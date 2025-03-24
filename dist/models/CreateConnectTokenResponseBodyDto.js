"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfCreateConnectTokenResponseBodyDto = instanceOfCreateConnectTokenResponseBodyDto;
exports.CreateConnectTokenResponseBodyDtoFromJSON = CreateConnectTokenResponseBodyDtoFromJSON;
exports.CreateConnectTokenResponseBodyDtoFromJSONTyped = CreateConnectTokenResponseBodyDtoFromJSONTyped;
exports.CreateConnectTokenResponseBodyDtoToJSON = CreateConnectTokenResponseBodyDtoToJSON;
exports.CreateConnectTokenResponseBodyDtoToJSONTyped = CreateConnectTokenResponseBodyDtoToJSONTyped;
/**
 * Check if a given object implements the CreateConnectTokenResponseBodyDto interface.
 */
function instanceOfCreateConnectTokenResponseBodyDto(value) {
    if (!('connectToken' in value) || value['connectToken'] === undefined)
        return false;
    return true;
}
function CreateConnectTokenResponseBodyDtoFromJSON(json) {
    return CreateConnectTokenResponseBodyDtoFromJSONTyped(json, false);
}
function CreateConnectTokenResponseBodyDtoFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'connectToken': json['connectToken'],
    };
}
function CreateConnectTokenResponseBodyDtoToJSON(json) {
    return CreateConnectTokenResponseBodyDtoToJSONTyped(json, false);
}
function CreateConnectTokenResponseBodyDtoToJSONTyped(value, ignoreDiscriminator) {
    if (ignoreDiscriminator === void 0) { ignoreDiscriminator = false; }
    if (value == null) {
        return value;
    }
    return {
        'connectToken': value['connectToken'],
    };
}
