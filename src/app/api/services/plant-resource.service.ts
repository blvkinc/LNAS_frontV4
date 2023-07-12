/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { PagePlantDto } from '../models/page-plant-dto';
import { PlantDto } from '../models/plant-dto';

@Injectable({
  providedIn: 'root',
})
export class PlantResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getPlant
   */
  static readonly GetPlantPath = '/api/plants/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPlant()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPlant$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PlantDto>> {

    const rb = new RequestBuilder(this.rootUrl, PlantResourceService.GetPlantPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PlantDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPlant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPlant(params: {
    id: number;
  },
  context?: HttpContext

): Observable<PlantDto> {

    return this.getPlant$Response(params,context).pipe(
      map((r: StrictHttpResponse<PlantDto>) => r.body as PlantDto)
    );
  }

  /**
   * Path part for operation updatePlant
   */
  static readonly UpdatePlantPath = '/api/plants/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePlant()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePlant$Response(params: {
    id: number;
    body: PlantDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PlantResourceService.UpdatePlantPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `updatePlant$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePlant(params: {
    id: number;
    body: PlantDto
  },
  context?: HttpContext

): Observable<void> {

    return this.updatePlant$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deletePlant
   */
  static readonly DeletePlantPath = '/api/plants/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePlant()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePlant$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PlantResourceService.DeletePlantPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `deletePlant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePlant(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deletePlant$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation paginatePlants
   */
  static readonly PaginatePlantsPath = '/api/plants';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paginatePlants()` instead.
   *
   * This method doesn't expect any request body.
   */
  paginatePlants$Response(params?: {

    /**
     * Zero-based page index (0..N)
     */
    page?: number;

    /**
     * The size of the page to be returned
     */
    size?: number;

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Filter Query
     */
    filter?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PagePlantDto>> {

    const rb = new RequestBuilder(this.rootUrl, PlantResourceService.PaginatePlantsPath, 'get');
    if (params) {
      rb.query('page', params.page, {});
      rb.query('size', params.size, {});
      rb.query('sort', params.sort, {});
      rb.query('filter', params.filter, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<PagePlantDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `paginatePlants$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paginatePlants(params?: {

    /**
     * Zero-based page index (0..N)
     */
    page?: number;

    /**
     * The size of the page to be returned
     */
    size?: number;

    /**
     * Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     */
    sort?: Array<string>;

    /**
     * Filter Query
     */
    filter?: string;
  },
  context?: HttpContext

): Observable<PagePlantDto> {

    return this.paginatePlants$Response(params,context).pipe(
      map((r: StrictHttpResponse<PagePlantDto>) => r.body as PagePlantDto)
    );
  }

  /**
   * Path part for operation createPlant
   */
  static readonly CreatePlantPath = '/api/plants';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPlant()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPlant$Response(params: {
    body: PlantDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, PlantResourceService.CreatePlantPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `createPlant$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPlant(params: {
    body: PlantDto
  },
  context?: HttpContext

): Observable<number> {

    return this.createPlant$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
