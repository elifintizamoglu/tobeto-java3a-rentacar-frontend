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
/* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent, HttpParameterCodec, HttpContext 
        }       from '@angular/common/http';
import { CustomHttpParameterCodec }                          from '../encoder';
import { Observable }                                        from 'rxjs';

// @ts-ignore
import { CreateRentalRequest } from '../model/create-rental-request';
// @ts-ignore
import { GetAllRentalResponse } from '../model/get-all-rental-response';
// @ts-ignore
import { GetRentalByIdResponse } from '../model/get-rental-by-id-response';
// @ts-ignore
import { ResourceNotFoundDetails } from '../model/resource-not-found-details';
// @ts-ignore
import { Result } from '../model/result';
// @ts-ignore
import { UpdateRentalRequest } from '../model/update-rental-request';
// @ts-ignore
import { UpdateRentalResponse } from '../model/update-rental-response';
// @ts-ignore
import { UpdateUserById400Response } from '../model/update-user-by-id400-response';

// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';
import {
    RentalsControllerServiceInterface,
    AddRentalRequestParams,
    CheckAvailabilityRequestParams,
    DeleteRentalByIdRequestParams,
    GetRentalByIdRequestParams,
    UpdateRentalByIdRequestParams
} from './rentals-controller.serviceInterface';



@Injectable({
  providedIn: 'root'
})
export class RentalsControllerService implements RentalsControllerServiceInterface {

    protected basePath = 'http://localhost:8080';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();
    public encoder: HttpParameterCodec;

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string|string[], @Optional() configuration: Configuration) {
        if (configuration) {
            this.configuration = configuration;
        }
        if (typeof this.configuration.basePath !== 'string') {
            if (Array.isArray(basePath) && basePath.length > 0) {
                basePath = basePath[0];
            }

            if (typeof basePath !== 'string') {
                basePath = this.basePath;
            }
            this.configuration.basePath = basePath;
        }
        this.encoder = this.configuration.encoder || new CustomHttpParameterCodec();
    }


    // @ts-ignore
    private addToHttpParams(httpParams: HttpParams, value: any, key?: string): HttpParams {
        if (typeof value === "object" && value instanceof Date === false) {
            httpParams = this.addToHttpParamsRecursive(httpParams, value);
        } else {
            httpParams = this.addToHttpParamsRecursive(httpParams, value, key);
        }
        return httpParams;
    }

    private addToHttpParamsRecursive(httpParams: HttpParams, value?: any, key?: string): HttpParams {
        if (value == null) {
            return httpParams;
        }

        if (typeof value === "object") {
            if (Array.isArray(value)) {
                (value as any[]).forEach( elem => httpParams = this.addToHttpParamsRecursive(httpParams, elem, key));
            } else if (value instanceof Date) {
                if (key != null) {
                    httpParams = httpParams.append(key, (value as Date).toISOString().substring(0, 10));
                } else {
                   throw Error("key may not be null if value is Date");
                }
            } else {
                Object.keys(value).forEach( k => httpParams = this.addToHttpParamsRecursive(
                    httpParams, value[k], key != null ? `${key}.${k}` : k));
            }
        } else if (key != null) {
            httpParams = httpParams.append(key, value);
        } else {
            throw Error("key may not be null if value is not object or array");
        }
        return httpParams;
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public addRental(requestParameters: AddRentalRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<Result>;
    public addRental(requestParameters: AddRentalRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Result>>;
    public addRental(requestParameters: AddRentalRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<Result>>;
    public addRental(requestParameters: AddRentalRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        const createRentalRequest = requestParameters.createRentalRequest;
        if (createRentalRequest === null || createRentalRequest === undefined) {
            throw new Error('Required parameter createRentalRequest was null or undefined when calling addRental.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*',
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/rentals`;
        return this.httpClient.request<Result>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: createRentalRequest,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public checkAvailability(requestParameters: CheckAvailabilityRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<Result>;
    public checkAvailability(requestParameters: CheckAvailabilityRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Result>>;
    public checkAvailability(requestParameters: CheckAvailabilityRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<Result>>;
    public checkAvailability(requestParameters: CheckAvailabilityRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        const createRentalRequest = requestParameters.createRentalRequest;
        if (createRentalRequest === null || createRentalRequest === undefined) {
            throw new Error('Required parameter createRentalRequest was null or undefined when calling checkAvailability.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*',
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/rentals/checkAvailability`;
        return this.httpClient.request<Result>('post', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: createRentalRequest,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteRentalById(requestParameters: DeleteRentalByIdRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<any>;
    public deleteRentalById(requestParameters: DeleteRentalByIdRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<any>>;
    public deleteRentalById(requestParameters: DeleteRentalByIdRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<any>>;
    public deleteRentalById(requestParameters: DeleteRentalByIdRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        const id = requestParameters.id;
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling deleteRentalById.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/rentals/delete/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int32"})}`;
        return this.httpClient.request<any>('delete', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getAllRentals(observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<Array<GetAllRentalResponse>>;
    public getAllRentals(observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<Array<GetAllRentalResponse>>>;
    public getAllRentals(observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<Array<GetAllRentalResponse>>>;
    public getAllRentals(observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*',
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/rentals`;
        return this.httpClient.request<Array<GetAllRentalResponse>>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getRentalById(requestParameters: GetRentalByIdRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<GetRentalByIdResponse>;
    public getRentalById(requestParameters: GetRentalByIdRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<GetRentalByIdResponse>>;
    public getRentalById(requestParameters: GetRentalByIdRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<GetRentalByIdResponse>>;
    public getRentalById(requestParameters: GetRentalByIdRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        const id = requestParameters.id;
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling getRentalById.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*',
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/rentals/getById/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int32"})}`;
        return this.httpClient.request<GetRentalByIdResponse>('get', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * @param requestParameters
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateRentalById(requestParameters: UpdateRentalByIdRequestParams, observe?: 'body', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<UpdateRentalResponse>;
    public updateRentalById(requestParameters: UpdateRentalByIdRequestParams, observe?: 'response', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpResponse<UpdateRentalResponse>>;
    public updateRentalById(requestParameters: UpdateRentalByIdRequestParams, observe?: 'events', reportProgress?: boolean, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<HttpEvent<UpdateRentalResponse>>;
    public updateRentalById(requestParameters: UpdateRentalByIdRequestParams, observe: any = 'body', reportProgress: boolean = false, options?: {httpHeaderAccept?: '*/*' | 'application/json', context?: HttpContext, transferCache?: boolean}): Observable<any> {
        const id = requestParameters.id;
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling updateRentalById.');
        }
        const updateRentalRequest = requestParameters.updateRentalRequest;
        if (updateRentalRequest === null || updateRentalRequest === undefined) {
            throw new Error('Required parameter updateRentalRequest was null or undefined when calling updateRentalById.');
        }

        let localVarHeaders = this.defaultHeaders;

        let localVarHttpHeaderAcceptSelected: string | undefined = options && options.httpHeaderAccept;
        if (localVarHttpHeaderAcceptSelected === undefined) {
            // to determine the Accept header
            const httpHeaderAccepts: string[] = [
                '*/*',
                'application/json'
            ];
            localVarHttpHeaderAcceptSelected = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        }
        if (localVarHttpHeaderAcceptSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Accept', localVarHttpHeaderAcceptSelected);
        }

        let localVarHttpContext: HttpContext | undefined = options && options.context;
        if (localVarHttpContext === undefined) {
            localVarHttpContext = new HttpContext();
        }

        let localVarTransferCache: boolean | undefined = options && options.transferCache;
        if (localVarTransferCache === undefined) {
            localVarTransferCache = true;
        }


        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected !== undefined) {
            localVarHeaders = localVarHeaders.set('Content-Type', httpContentTypeSelected);
        }

        let responseType_: 'text' | 'json' | 'blob' = 'json';
        if (localVarHttpHeaderAcceptSelected) {
            if (localVarHttpHeaderAcceptSelected.startsWith('text')) {
                responseType_ = 'text';
            } else if (this.configuration.isJsonMime(localVarHttpHeaderAcceptSelected)) {
                responseType_ = 'json';
            } else {
                responseType_ = 'blob';
            }
        }

        let localVarPath = `/api/v1/rentals/update/${this.configuration.encodeParam({name: "id", value: id, in: "path", style: "simple", explode: false, dataType: "number", dataFormat: "int32"})}`;
        return this.httpClient.request<UpdateRentalResponse>('put', `${this.configuration.basePath}${localVarPath}`,
            {
                context: localVarHttpContext,
                body: updateRentalRequest,
                responseType: <any>responseType_,
                withCredentials: this.configuration.withCredentials,
                headers: localVarHeaders,
                observe: observe,
                transferCache: localVarTransferCache,
                reportProgress: reportProgress
            }
        );
    }

}
