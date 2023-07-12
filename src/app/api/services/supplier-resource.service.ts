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

import { PageSupplierDto } from '../models/page-supplier-dto';
import { SupplierDto } from '../models/supplier-dto';

@Injectable({
  providedIn: 'root',
})
export class SupplierResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getSupplier
   */
  static readonly GetSupplierPath = '/api/suppliers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSupplier()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSupplier$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SupplierDto>> {

    const rb = new RequestBuilder(this.rootUrl, SupplierResourceService.GetSupplierPath, 'get');
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
        return r as StrictHttpResponse<SupplierDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSupplier$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSupplier(params: {
    id: number;
  },
  context?: HttpContext

): Observable<SupplierDto> {

    return this.getSupplier$Response(params,context).pipe(
      map((r: StrictHttpResponse<SupplierDto>) => r.body as SupplierDto)
    );
  }

  /**
   * Path part for operation updateSupplier
   */
  static readonly UpdateSupplierPath = '/api/suppliers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSupplier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSupplier$Response(params: {
    id: number;
    body: SupplierDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SupplierResourceService.UpdateSupplierPath, 'put');
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
   * To access the full response (for headers, for example), `updateSupplier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSupplier(params: {
    id: number;
    body: SupplierDto
  },
  context?: HttpContext

): Observable<void> {

    return this.updateSupplier$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteSupplier
   */
  static readonly DeleteSupplierPath = '/api/suppliers/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSupplier()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSupplier$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SupplierResourceService.DeleteSupplierPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteSupplier$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSupplier(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteSupplier$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation paginateSuppliers
   */
  static readonly PaginateSuppliersPath = '/api/suppliers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paginateSuppliers()` instead.
   *
   * This method doesn't expect any request body.
   */
  paginateSuppliers$Response(params?: {

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

): Observable<StrictHttpResponse<PageSupplierDto>> {

    const rb = new RequestBuilder(this.rootUrl, SupplierResourceService.PaginateSuppliersPath, 'get');
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
        return r as StrictHttpResponse<PageSupplierDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `paginateSuppliers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paginateSuppliers(params?: {

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

): Observable<PageSupplierDto> {

    return this.paginateSuppliers$Response(params,context).pipe(
      map((r: StrictHttpResponse<PageSupplierDto>) => r.body as PageSupplierDto)
    );
  }

  /**
   * Path part for operation createSupplier
   */
  static readonly CreateSupplierPath = '/api/suppliers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createSupplier()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSupplier$Response(params: {
    body: SupplierDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, SupplierResourceService.CreateSupplierPath, 'post');
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
   * To access the full response (for headers, for example), `createSupplier$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSupplier(params: {
    body: SupplierDto
  },
  context?: HttpContext

): Observable<number> {

    return this.createSupplier$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
