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

import { PageProductionDto } from '../models/page-production-dto';
import { ProductionDto } from '../models/production-dto';

@Injectable({
  providedIn: 'root',
})
export class ProductionResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getProduction
   */
  static readonly GetProductionPath = '/api/productions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProduction()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProduction$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ProductionDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductionResourceService.GetProductionPath, 'get');
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
        return r as StrictHttpResponse<ProductionDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProduction$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProduction(params: {
    id: number;
  },
  context?: HttpContext

): Observable<ProductionDto> {

    return this.getProduction$Response(params,context).pipe(
      map((r: StrictHttpResponse<ProductionDto>) => r.body as ProductionDto)
    );
  }

  /**
   * Path part for operation updateProduction
   */
  static readonly UpdateProductionPath = '/api/productions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateProduction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProduction$Response(params: {
    id: number;
    body: ProductionDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductionResourceService.UpdateProductionPath, 'put');
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
   * To access the full response (for headers, for example), `updateProduction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateProduction(params: {
    id: number;
    body: ProductionDto
  },
  context?: HttpContext

): Observable<void> {

    return this.updateProduction$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteProduction
   */
  static readonly DeleteProductionPath = '/api/productions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteProduction()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProduction$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProductionResourceService.DeleteProductionPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteProduction$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteProduction(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteProduction$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation paginateProductions
   */
  static readonly PaginateProductionsPath = '/api/productions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paginateProductions()` instead.
   *
   * This method doesn't expect any request body.
   */
  paginateProductions$Response(params?: {

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

): Observable<StrictHttpResponse<PageProductionDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProductionResourceService.PaginateProductionsPath, 'get');
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
        return r as StrictHttpResponse<PageProductionDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `paginateProductions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paginateProductions(params?: {

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

): Observable<PageProductionDto> {

    return this.paginateProductions$Response(params,context).pipe(
      map((r: StrictHttpResponse<PageProductionDto>) => r.body as PageProductionDto)
    );
  }

  /**
   * Path part for operation createProduction
   */
  static readonly CreateProductionPath = '/api/productions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createProduction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createProduction$Response(params: {
    body: ProductionDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, ProductionResourceService.CreateProductionPath, 'post');
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
   * To access the full response (for headers, for example), `createProduction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createProduction(params: {
    body: ProductionDto
  },
  context?: HttpContext

): Observable<number> {

    return this.createProduction$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
