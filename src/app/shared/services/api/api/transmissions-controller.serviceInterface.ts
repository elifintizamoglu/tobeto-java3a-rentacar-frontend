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

import { CreateTransmissionRequest } from '../model/models';
import { CreateTransmissionResponse } from '../model/models';
import { GetAllTransmissionResponse } from '../model/models';
import { GetTransmissionByIdResponse } from '../model/models';
import { ResourceNotFoundDetails } from '../model/models';
import { UpdateTransmissionRequest } from '../model/models';
import { UpdateTransmissionResponse } from '../model/models';
import { UpdateUserById400Response } from '../model/models';


import { Configuration }                                     from '../configuration';


export interface AddTransmissionRequestParams {
    createTransmissionRequest: CreateTransmissionRequest;
}

export interface DeleteTransmissionByIdRequestParams {
    id: number;
}

export interface GetTransmissionByIdRequestParams {
    id: number;
}

export interface UpdateTransmissionByIdRequestParams {
    id: number;
    updateTransmissionRequest: UpdateTransmissionRequest;
}


export interface TransmissionsControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
* @param requestParameters
     */
    addTransmission(requestParameters: AddTransmissionRequestParams, extraHttpRequestParams?: any): Observable<CreateTransmissionResponse>;

    /**
     * 
     * 
* @param requestParameters
     */
    deleteTransmissionById(requestParameters: DeleteTransmissionByIdRequestParams, extraHttpRequestParams?: any): Observable<{}>;

    /**
     * 
     * 
*/
    getAllTransmissions(extraHttpRequestParams?: any): Observable<Array<GetAllTransmissionResponse>>;

    /**
     * 
     * 
* @param requestParameters
     */
    getTransmissionById(requestParameters: GetTransmissionByIdRequestParams, extraHttpRequestParams?: any): Observable<GetTransmissionByIdResponse>;

    /**
     * 
     * 
* @param requestParameters
     */
    updateTransmissionById(requestParameters: UpdateTransmissionByIdRequestParams, extraHttpRequestParams?: any): Observable<UpdateTransmissionResponse>;

}
