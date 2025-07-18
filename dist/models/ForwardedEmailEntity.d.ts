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
import type { ForwardedEmailEntityEnvelope } from './ForwardedEmailEntityEnvelope';
import type { ForwardedEmailEntityCharsets } from './ForwardedEmailEntityCharsets';
import type { ForwardedEmailEntityPopulatedAttachmentsInner } from './ForwardedEmailEntityPopulatedAttachmentsInner';
/**
 *
 * @export
 * @interface ForwardedEmailEntity
 */
export interface ForwardedEmailEntity {
    /**
     *
     * @type {string}
     * @memberof ForwardedEmailEntity
     */
    id: string;
    /**
     *
     * @type {string}
     * @memberof ForwardedEmailEntity
     */
    ownerOrganization: string;
    /**
     *
     * @type {string}
     * @memberof ForwardedEmailEntity
     */
    to: string;
    /**
     *
     * @type {string}
     * @memberof ForwardedEmailEntity
     */
    from: string;
    /**
     *
     * @type {string}
     * @memberof ForwardedEmailEntity
     */
    subject: string;
    /**
     *
     * @type {string}
     * @memberof ForwardedEmailEntity
     */
    emailContent: string;
    /**
     *
     * @type {ForwardedEmailEntityCharsets}
     * @memberof ForwardedEmailEntity
     */
    charsets?: ForwardedEmailEntityCharsets;
    /**
     *
     * @type {ForwardedEmailEntityEnvelope}
     * @memberof ForwardedEmailEntity
     */
    envelope?: ForwardedEmailEntityEnvelope;
    /**
     *
     * @type {Array<string>}
     * @memberof ForwardedEmailEntity
     */
    attachments?: Array<string>;
    /**
     *
     * @type {Array<ForwardedEmailEntityPopulatedAttachmentsInner>}
     * @memberof ForwardedEmailEntity
     */
    populatedAttachments?: Array<ForwardedEmailEntityPopulatedAttachmentsInner>;
    /**
     *
     * @type {any}
     * @memberof ForwardedEmailEntity
     */
    createdAt: any | null;
    /**
     *
     * @type {any}
     * @memberof ForwardedEmailEntity
     */
    updatedAt: any | null;
}
/**
 * Check if a given object implements the ForwardedEmailEntity interface.
 */
export declare function instanceOfForwardedEmailEntity(value: object): value is ForwardedEmailEntity;
export declare function ForwardedEmailEntityFromJSON(json: any): ForwardedEmailEntity;
export declare function ForwardedEmailEntityFromJSONTyped(json: any, ignoreDiscriminator: boolean): ForwardedEmailEntity;
export declare function ForwardedEmailEntityToJSON(json: any): ForwardedEmailEntity;
export declare function ForwardedEmailEntityToJSONTyped(value?: ForwardedEmailEntity | null, ignoreDiscriminator?: boolean): any;
