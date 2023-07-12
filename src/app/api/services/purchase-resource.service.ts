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

import { PagePurchaseDto } from '../models/page-purchase-dto';
import { PurchaseDto } from '../models/purchase-dto';

@Injectable({
  providedIn: 'root',
})
export class PurchaseResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getPurchase
   */
  static readonly GetPurchasePath = '/api/purchases/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPurchase()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPurchase$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<PurchaseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PurchaseResourceService.GetPurchasePath, 'get');
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
        return r as StrictHttpResponse<PurchaseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPurchase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPurchase(params: {
    id: number;
  },
  context?: HttpContext

): Observable<PurchaseDto> {

    return this.getPurchase$Response(params,context).pipe(
      map((r: StrictHttpResponse<PurchaseDto>) => r.body as PurchaseDto)
    );
  }

  /**
   * Path part for operation updatePurchase
   */
  static readonly UpdatePurchasePath = '/api/purchases/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updatePurchase()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePurchase$Response(params: {
    id: number;
    body: PurchaseDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PurchaseResourceService.UpdatePurchasePath, 'put');
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
   * To access the full response (for headers, for example), `updatePurchase$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updatePurchase(params: {
    id: number;
    body: PurchaseDto
  },
  context?: HttpContext

): Observable<void> {

    return this.updatePurchase$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deletePurchase
   */
  static readonly DeletePurchasePath = '/api/purchases/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deletePurchase()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePurchase$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PurchaseResourceService.DeletePurchasePath, 'delete');
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
   * To access the full response (for headers, for example), `deletePurchase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deletePurchase(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deletePurchase$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation paginatePurchases
   */
  static readonly PaginatePurchasesPath = '/api/purchases';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paginatePurchases()` instead.
   *
   * This method doesn't expect any request body.
   */
  paginatePurchases$Response(params?: {

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

): Observable<StrictHttpResponse<PagePurchaseDto>> {

    const rb = new RequestBuilder(this.rootUrl, PurchaseResourceService.PaginatePurchasesPath, 'get');
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
        return r as StrictHttpResponse<PagePurchaseDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `paginatePurchases$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paginatePurchases(params?: {

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

): Observable<PagePurchaseDto> {

    return this.paginatePurchases$Response(params,context).pipe(
      map((r: StrictHttpResponse<PagePurchaseDto>) => r.body as PagePurchaseDto)
    );
  }

  /**
   * Path part for operation createPurchase
   */
  static readonly CreatePurchasePath = '/api/purchases';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createPurchase()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPurchase$Response(params: {
    body: PurchaseDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, PurchaseResourceService.CreatePurchasePath, 'post');
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
   * To access the full response (for headers, for example), `createPurchase$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createPurchase(params: {
    body: PurchaseDto
  },
  context?: HttpContext

): Observable<number> {

    return this.createPurchase$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
