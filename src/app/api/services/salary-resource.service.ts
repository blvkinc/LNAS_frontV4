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

import { PageSalaryDto } from '../models/page-salary-dto';
import { SalaryDto } from '../models/salary-dto';

@Injectable({
  providedIn: 'root',
})
export class SalaryResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getSalary
   */
  static readonly GetSalaryPath = '/api/salaries/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSalary()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSalary$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<SalaryDto>> {

    const rb = new RequestBuilder(this.rootUrl, SalaryResourceService.GetSalaryPath, 'get');
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
        return r as StrictHttpResponse<SalaryDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSalary$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSalary(params: {
    id: number;
  },
  context?: HttpContext

): Observable<SalaryDto> {

    return this.getSalary$Response(params,context).pipe(
      map((r: StrictHttpResponse<SalaryDto>) => r.body as SalaryDto)
    );
  }

  /**
   * Path part for operation updateSalary
   */
  static readonly UpdateSalaryPath = '/api/salaries/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateSalary()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSalary$Response(params: {
    id: number;
    body: SalaryDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SalaryResourceService.UpdateSalaryPath, 'put');
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
   * To access the full response (for headers, for example), `updateSalary$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateSalary(params: {
    id: number;
    body: SalaryDto
  },
  context?: HttpContext

): Observable<void> {

    return this.updateSalary$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteSalary
   */
  static readonly DeleteSalaryPath = '/api/salaries/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteSalary()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSalary$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SalaryResourceService.DeleteSalaryPath, 'delete');
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
   * To access the full response (for headers, for example), `deleteSalary$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteSalary(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteSalary$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation paginateSalaries
   */
  static readonly PaginateSalariesPath = '/api/salaries';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paginateSalaries()` instead.
   *
   * This method doesn't expect any request body.
   */
  paginateSalaries$Response(params?: {

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

): Observable<StrictHttpResponse<PageSalaryDto>> {

    const rb = new RequestBuilder(this.rootUrl, SalaryResourceService.PaginateSalariesPath, 'get');
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
        return r as StrictHttpResponse<PageSalaryDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `paginateSalaries$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paginateSalaries(params?: {

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

): Observable<PageSalaryDto> {

    return this.paginateSalaries$Response(params,context).pipe(
      map((r: StrictHttpResponse<PageSalaryDto>) => r.body as PageSalaryDto)
    );
  }

  /**
   * Path part for operation createSalary
   */
  static readonly CreateSalaryPath = '/api/salaries';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createSalary()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSalary$Response(params: {
    body: SalaryDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, SalaryResourceService.CreateSalaryPath, 'post');
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
   * To access the full response (for headers, for example), `createSalary$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createSalary(params: {
    body: SalaryDto
  },
  context?: HttpContext

): Observable<number> {

    return this.createSalary$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
