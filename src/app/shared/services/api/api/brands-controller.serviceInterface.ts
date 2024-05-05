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
import { HttpHeaders }                                       from '@angular/common/http';

import { Observable }                                        from 'rxjs';

import { CreateBrandRequest } from '../model/models';
import { CreatedBrandResponse } from '../model/models';
import { GetAll400Response } from '../model/models';
import { GetAllBrandResponse } from '../model/models';


import { Configuration }                                     from '../configuration';


export interface Add4RequestParams {
    createBrandRequest: CreateBrandRequest;
}

export interface DeleteBrandByIdRequestParams {
    id: number;
}


export interface BrandsControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
* @param requestParameters
     */
    add4(requestParameters: Add4RequestParams, extraHttpRequestParams?: any): Observable<CreatedBrandResponse>;

    /**
     * 
     * 
* @param requestParameters
     */
    deleteBrandById(requestParameters: DeleteBrandByIdRequestParams, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
*/
    getAll4(extraHttpRequestParams?: any): Observable<Array<GetAllBrandResponse>>;

}
