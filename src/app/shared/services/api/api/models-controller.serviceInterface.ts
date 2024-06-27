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

import { CreateModelRequest } from '../model/models';
import { CreateModelResponse } from '../model/models';
import { GetAllModelResponse } from '../model/models';
import { GetModelByIdResponse } from '../model/models';
import { GetModelsByBrandIdResponse } from '../model/models';
import { ResourceNotFoundDetails } from '../model/models';
import { Result } from '../model/models';
import { UpdateModelRequest } from '../model/models';
import { UpdateModelResponse } from '../model/models';
import { UpdateUserById400Response } from '../model/models';


import { Configuration }                                     from '../configuration';


export interface AddModelRequestParams {
    createModelRequest: CreateModelRequest;
}

export interface DeleteModelByIdRequestParams {
    id: number;
}

export interface GetModelByIdRequestParams {
    id: number;
}

export interface GetModelsByBrandIdRequestParams {
    id: number;
}

export interface UpdateModelByIdRequestParams {
    id: number;
    updateModelRequest: UpdateModelRequest;
}


export interface ModelsControllerServiceInterface {
    defaultHeaders: HttpHeaders;
    configuration: Configuration;

    /**
     * 
     * 
* @param requestParameters
     */
    addModel(requestParameters: AddModelRequestParams, extraHttpRequestParams?: any): Observable<CreateModelResponse>;

    /**
     * 
     * 
* @param requestParameters
     */
    deleteModelById(requestParameters: DeleteModelByIdRequestParams, extraHttpRequestParams?: any): Observable<Result>;

    /**
     * 
     * 
*/
    getAllModels(extraHttpRequestParams?: any): Observable<Array<GetAllModelResponse>>;

    /**
     * 
     * 
* @param requestParameters
     */
    getModelById(requestParameters: GetModelByIdRequestParams, extraHttpRequestParams?: any): Observable<GetModelByIdResponse>;

    /**
     * 
     * 
* @param requestParameters
     */
    getModelsByBrandId(requestParameters: GetModelsByBrandIdRequestParams, extraHttpRequestParams?: any): Observable<Array<GetModelsByBrandIdResponse>>;

    /**
     * 
     * 
* @param requestParameters
     */
    updateModelById(requestParameters: UpdateModelByIdRequestParams, extraHttpRequestParams?: any): Observable<UpdateModelResponse>;

}
