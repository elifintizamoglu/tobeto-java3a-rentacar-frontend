/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface GetCarsByFiltersResponse { 
    id?: number;
    modelYear?: number;
    plate?: string;
    state?: GetCarsByFiltersResponse.StateEnum;
    dailyPrice?: number;
    brandName?: string;
    modelName?: string;
    fuelName?: string;
    transmissionName?: string;
}
export namespace GetCarsByFiltersResponse {
    export type StateEnum = 'AVAILABLE' | 'RENTED' | 'MAINTENANCE' | 'OUT_OF_SERVICE';
    export const StateEnum = {
        Available: 'AVAILABLE' as StateEnum,
        Rented: 'RENTED' as StateEnum,
        Maintenance: 'MAINTENANCE' as StateEnum,
        OutOfService: 'OUT_OF_SERVICE' as StateEnum
    };
}


