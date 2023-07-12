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

import { FarmDto } from '../models/farm-dto';
import { PageFarmDto } from '../models/page-farm-dto';

@Injectable({
  providedIn: 'root',
})
export class FarmResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getFarm
   */
  static readonly GetFarmPath = '/api/farms/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFarm()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFarm$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<FarmDto>> {

    const rb = new RequestBuilder(this.rootUrl, FarmResourceService.GetFarmPath, 'get');
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
        return r as StrictHttpResponse<FarmDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFarm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFarm(params: {
    id: number;
  },
  context?: HttpContext

): Observable<FarmDto> {

    return this.getFarm$Response(params,context).pipe(
      map((r: StrictHttpResponse<FarmDto>) => r.body as FarmDto)
    );
  }

  /**
   * Path part for operation updateFarm
   */
  static readonly UpdateFarmPath = '/api/farms/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateFarm()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateFarm$Response(params: {
    id: number;
    body: FarmDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FarmResourceService.UpdateFarmPath, 'put');
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
   * To access the full response (for headers, for example), `updateFarm$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateFarm(params: {
    id: number;
    body: FarmDto
  },
  context?: HttpContext

): Observable<void> {

    return this.updateFarm$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteFarm
   */
  static readonly DeleteFarmPath = '/api/farms/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteFarm()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFarm$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, FarmResourceService.DeleteFarmPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteFarm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteFarm(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteFarm$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation paginateFarms
   */
  static readonly PaginateFarmsPath = '/api/farms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paginateFarms()` instead.
   *
   * This method doesn't expect any request body.
   */
  paginateFarms$Response(params?: {

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

): Observable<StrictHttpResponse<PageFarmDto>> {

    const rb = new RequestBuilder(this.rootUrl, FarmResourceService.PaginateFarmsPath, 'get');
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
        return r as StrictHttpResponse<PageFarmDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `paginateFarms$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paginateFarms(params?: {

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

): Observable<PageFarmDto> {

    return this.paginateFarms$Response(params,context).pipe(
      map((r: StrictHttpResponse<PageFarmDto>) => r.body as PageFarmDto)
    );
  }

  /**
   * Path part for operation createFarm
   */
  static readonly CreateFarmPath = '/api/farms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createFarm()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createFarm$Response(params: {
    body: FarmDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, FarmResourceService.CreateFarmPath, 'post');
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
   * To access the full response (for headers, for example), `createFarm$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createFarm(params: {
    body: FarmDto
  },
  context?: HttpContext

): Observable<number> {

    return this.createFarm$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
