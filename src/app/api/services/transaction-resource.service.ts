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

import { PageTransactionDto } from '../models/page-transaction-dto';
import { TransactionDto } from '../models/transaction-dto';

@Injectable({
  providedIn: 'root',
})
export class TransactionResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getTransaction
   */
  static readonly GetTransactionPath = '/api/transactions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTransaction()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTransaction$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<TransactionDto>> {

    const rb = new RequestBuilder(this.rootUrl, TransactionResourceService.GetTransactionPath, 'get');
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
        return r as StrictHttpResponse<TransactionDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getTransaction$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTransaction(params: {
    id: number;
  },
  context?: HttpContext

): Observable<TransactionDto> {

    return this.getTransaction$Response(params,context).pipe(
      map((r: StrictHttpResponse<TransactionDto>) => r.body as TransactionDto)
    );
  }

  /**
   * Path part for operation updateTransaction
   */
  static readonly UpdateTransactionPath = '/api/transactions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTransaction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTransaction$Response(params: {
    id: number;
    body: TransactionDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TransactionResourceService.UpdateTransactionPath, 'put');
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
   * To access the full response (for headers, for example), `updateTransaction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTransaction(params: {
    id: number;
    body: TransactionDto
  },
  context?: HttpContext

): Observable<void> {

    return this.updateTransaction$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteTransaction
   */
  static readonly DeleteTransactionPath = '/api/transactions/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTransaction()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTransaction$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, TransactionResourceService.DeleteTransactionPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteTransaction$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTransaction(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteTransaction$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation paginateTransactions
   */
  static readonly PaginateTransactionsPath = '/api/transactions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paginateTransactions()` instead.
   *
   * This method doesn't expect any request body.
   */
  paginateTransactions$Response(params?: {

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

): Observable<StrictHttpResponse<PageTransactionDto>> {

    const rb = new RequestBuilder(this.rootUrl, TransactionResourceService.PaginateTransactionsPath, 'get');
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
        return r as StrictHttpResponse<PageTransactionDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `paginateTransactions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paginateTransactions(params?: {

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

): Observable<PageTransactionDto> {

    return this.paginateTransactions$Response(params,context).pipe(
      map((r: StrictHttpResponse<PageTransactionDto>) => r.body as PageTransactionDto)
    );
  }

  /**
   * Path part for operation createTransaction
   */
  static readonly CreateTransactionPath = '/api/transactions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTransaction()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTransaction$Response(params: {
    body: TransactionDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, TransactionResourceService.CreateTransactionPath, 'post');
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
   * To access the full response (for headers, for example), `createTransaction$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTransaction(params: {
    body: TransactionDto
  },
  context?: HttpContext

): Observable<number> {

    return this.createTransaction$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
