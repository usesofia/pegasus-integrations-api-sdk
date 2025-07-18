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
import type { ProcessEmailForForwardingIntegrationRequestBodyDtoRequester } from './ProcessEmailForForwardingIntegrationRequestBodyDtoRequester';
/**
 *
 * @export
 * @interface ProcessEmailForForwardingIntegrationRequestBodyDto
 */
export interface ProcessEmailForForwardingIntegrationRequestBodyDto {
    /**
     *
     * @type {string}
     * @memberof ProcessEmailForForwardingIntegrationRequestBodyDto
     */
    forwardedEmailId: string;
    /**
     *
     * @type {ProcessEmailForForwardingIntegrationRequestBodyDtoRequester}
     * @memberof ProcessEmailForForwardingIntegrationRequestBodyDto
     */
    requester: ProcessEmailForForwardingIntegrationRequestBodyDtoRequester;
}
/**
 * Check if a given object implements the ProcessEmailForForwardingIntegrationRequestBodyDto interface.
 */
export declare function instanceOfProcessEmailForForwardingIntegrationRequestBodyDto(value: object): value is ProcessEmailForForwardingIntegrationRequestBodyDto;
export declare function ProcessEmailForForwardingIntegrationRequestBodyDtoFromJSON(json: any): ProcessEmailForForwardingIntegrationRequestBodyDto;
export declare function ProcessEmailForForwardingIntegrationRequestBodyDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessEmailForForwardingIntegrationRequestBodyDto;
export declare function ProcessEmailForForwardingIntegrationRequestBodyDtoToJSON(json: any): ProcessEmailForForwardingIntegrationRequestBodyDto;
export declare function ProcessEmailForForwardingIntegrationRequestBodyDtoToJSONTyped(value?: ProcessEmailForForwardingIntegrationRequestBodyDto | null, ignoreDiscriminator?: boolean): any;
