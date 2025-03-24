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
/**
 *
 * @export
 * @interface RawAccountEntityConnector
 */
export interface RawAccountEntityConnector {
    /**
     *
     * @type {number}
     * @memberof RawAccountEntityConnector
     */
    id: number;
    /**
     *
     * @type {string}
     * @memberof RawAccountEntityConnector
     */
    name: string;
    /**
     *
     * @type {string}
     * @memberof RawAccountEntityConnector
     */
    institutionUrl: string;
    /**
     *
     * @type {string}
     * @memberof RawAccountEntityConnector
     */
    imageUrl: string;
    /**
     *
     * @type {string}
     * @memberof RawAccountEntityConnector
     */
    primaryColor: string;
}
/**
 * Check if a given object implements the RawAccountEntityConnector interface.
 */
export declare function instanceOfRawAccountEntityConnector(value: object): value is RawAccountEntityConnector;
export declare function RawAccountEntityConnectorFromJSON(json: any): RawAccountEntityConnector;
export declare function RawAccountEntityConnectorFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawAccountEntityConnector;
export declare function RawAccountEntityConnectorToJSON(json: any): RawAccountEntityConnector;
export declare function RawAccountEntityConnectorToJSONTyped(value?: RawAccountEntityConnector | null, ignoreDiscriminator?: boolean): any;
