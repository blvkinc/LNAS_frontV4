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

import { EmployeeDto } from '../models/employee-dto';
import { PageEmployeeDto } from '../models/page-employee-dto';

@Injectable({
  providedIn: 'root',
})
export class EmployeeResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getEmployee
   */
  static readonly GetEmployeePath = '/api/employees/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getEmployee()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployee$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<EmployeeDto>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeResourceService.GetEmployeePath, 'get');
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
        return r as StrictHttpResponse<EmployeeDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getEmployee$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getEmployee(params: {
    id: number;
  },
  context?: HttpContext

): Observable<EmployeeDto> {

    return this.getEmployee$Response(params,context).pipe(
      map((r: StrictHttpResponse<EmployeeDto>) => r.body as EmployeeDto)
    );
  }

  /**
   * Path part for operation updateEmployee
   */
  static readonly UpdateEmployeePath = '/api/employees/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateEmployee()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEmployee$Response(params: {
    id: number;
    body: EmployeeDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeResourceService.UpdateEmployeePath, 'put');
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
   * To access the full response (for headers, for example), `updateEmployee$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateEmployee(params: {
    id: number;
    body: EmployeeDto
  },
  context?: HttpContext

): Observable<void> {

    return this.updateEmployee$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation deleteEmployee
   */
  static readonly DeleteEmployeePath = '/api/employees/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteEmployee()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEmployee$Response(params: {
    id: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeResourceService.DeleteEmployeePath, 'delete');
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
   * To access the full response (for headers, for example), `deleteEmployee$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteEmployee(params: {
    id: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.deleteEmployee$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation paginateEmployees
   */
  static readonly PaginateEmployeesPath = '/api/employees';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paginateEmployees()` instead.
   *
   * This method doesn't expect any request body.
   */
  paginateEmployees$Response(params?: {

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

): Observable<StrictHttpResponse<PageEmployeeDto>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeResourceService.PaginateEmployeesPath, 'get');
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
        return r as StrictHttpResponse<PageEmployeeDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `paginateEmployees$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paginateEmployees(params?: {

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

): Observable<PageEmployeeDto> {

    return this.paginateEmployees$Response(params,context).pipe(
      map((r: StrictHttpResponse<PageEmployeeDto>) => r.body as PageEmployeeDto)
    );
  }

  /**
   * Path part for operation createEmployee
   */
  static readonly CreateEmployeePath = '/api/employees';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createEmployee()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createEmployee$Response(params: {
    body: EmployeeDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, EmployeeResourceService.CreateEmployeePath, 'post');
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
   * To access the full response (for headers, for example), `createEmployee$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createEmployee(params: {
    body: EmployeeDto
  },
  context?: HttpContext

): Observable<number> {

    return this.createEmployee$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
