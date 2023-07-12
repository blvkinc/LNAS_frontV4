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

import { FarmSummaryDto } from '../models/farm-summary-dto';
import { MonthlyProductionByFarm } from '../models/monthly-production-by-farm';
import { OrderSummary } from '../models/order-summary';
import { ProductionQuantity } from '../models/production-quantity';
import { ProductionSummary } from '../models/production-summary';
import { ProductionSummaryDto } from '../models/production-summary-dto';
import { PurchaseSummaryDto } from '../models/purchase-summary-dto';
import { SalarySummaryDto } from '../models/salary-summary-dto';
import { SalesSummaryDto } from '../models/sales-summary-dto';

@Injectable({
  providedIn: 'root',
})
export class ReportResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getWeeklySales
   */
  static readonly GetWeeklySalesPath = '/api/reports/sales/weekly-sales';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWeeklySales()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeeklySales$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<OrderSummary>>> {

    const rb = new RequestBuilder(this.rootUrl, ReportResourceService.GetWeeklySalesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OrderSummary>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getWeeklySales$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeeklySales(params?: {
  },
  context?: HttpContext

): Observable<Array<OrderSummary>> {

    return this.getWeeklySales$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<OrderSummary>>) => r.body as Array<OrderSummary>)
    );
  }

  /**
   * Path part for operation getMonthlySales
   */
  static readonly GetMonthlySalesPath = '/api/reports/sales/monthly-sales';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMonthlySales()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthlySales$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<OrderSummary>>> {

    const rb = new RequestBuilder(this.rootUrl, ReportResourceService.GetMonthlySalesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<OrderSummary>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMonthlySales$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthlySales(params?: {
  },
  context?: HttpContext

): Observable<Array<OrderSummary>> {

    return this.getMonthlySales$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<OrderSummary>>) => r.body as Array<OrderSummary>)
    );
  }

  /**
   * Path part for operation getSalesSummary
   */
  static readonly GetSalesSummaryPath = '/api/reports/sales-summary';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSalesSummary()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSalesSummary$Response(params?: {
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SalesSummaryDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ReportResourceService.GetSalesSummaryPath, 'get');
    if (params) {
      rb.query('startDate', params.startDate, {});
      rb.query('endDate', params.endDate, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SalesSummaryDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSalesSummary$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSalesSummary(params?: {
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<Array<SalesSummaryDto>> {

    return this.getSalesSummary$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SalesSummaryDto>>) => r.body as Array<SalesSummaryDto>)
    );
  }

  /**
   * Path part for operation getSalarySummary
   */
  static readonly GetSalarySummaryPath = '/api/reports/salary-summary';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getSalarySummary()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSalarySummary$Response(params?: {
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<SalarySummaryDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ReportResourceService.GetSalarySummaryPath, 'get');
    if (params) {
      rb.query('startDate', params.startDate, {});
      rb.query('endDate', params.endDate, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<SalarySummaryDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getSalarySummary$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getSalarySummary(params?: {
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<Array<SalarySummaryDto>> {

    return this.getSalarySummary$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<SalarySummaryDto>>) => r.body as Array<SalarySummaryDto>)
    );
  }

  /**
   * Path part for operation getPurchaseSummary
   */
  static readonly GetPurchaseSummaryPath = '/api/reports/purchase-summary';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPurchaseSummary()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPurchaseSummary$Response(params?: {
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<PurchaseSummaryDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ReportResourceService.GetPurchaseSummaryPath, 'get');
    if (params) {
      rb.query('startDate', params.startDate, {});
      rb.query('endDate', params.endDate, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<PurchaseSummaryDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPurchaseSummary$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPurchaseSummary(params?: {
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<Array<PurchaseSummaryDto>> {

    return this.getPurchaseSummary$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<PurchaseSummaryDto>>) => r.body as Array<PurchaseSummaryDto>)
    );
  }

  /**
   * Path part for operation getWeeklyProduction
   */
  static readonly GetWeeklyProductionPath = '/api/reports/production/weekly-production';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWeeklyProduction()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeeklyProduction$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ProductionQuantity>>> {

    const rb = new RequestBuilder(this.rootUrl, ReportResourceService.GetWeeklyProductionPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProductionQuantity>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getWeeklyProduction$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeeklyProduction(params?: {
  },
  context?: HttpContext

): Observable<Array<ProductionQuantity>> {

    return this.getWeeklyProduction$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ProductionQuantity>>) => r.body as Array<ProductionQuantity>)
    );
  }

  /**
   * Path part for operation getMonthlyProduction
   */
  static readonly GetMonthlyProductionPath = '/api/reports/production/monthly-production';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMonthlyProduction()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthlyProduction$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ProductionQuantity>>> {

    const rb = new RequestBuilder(this.rootUrl, ReportResourceService.GetMonthlyProductionPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProductionQuantity>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMonthlyProduction$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthlyProduction(params?: {
  },
  context?: HttpContext

): Observable<Array<ProductionQuantity>> {

    return this.getMonthlyProduction$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ProductionQuantity>>) => r.body as Array<ProductionQuantity>)
    );
  }

  /**
   * Path part for operation getProductionByStatus
   */
  static readonly GetProductionByStatusPath = '/api/reports/production/by-status';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductionByStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductionByStatus$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ProductionSummary>>> {

    const rb = new RequestBuilder(this.rootUrl, ReportResourceService.GetProductionByStatusPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProductionSummary>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductionByStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductionByStatus(params?: {
  },
  context?: HttpContext

): Observable<Array<ProductionSummary>> {

    return this.getProductionByStatus$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ProductionSummary>>) => r.body as Array<ProductionSummary>)
    );
  }

  /**
   * Path part for operation getProductionByFarm
   */
  static readonly GetProductionByFarmPath = '/api/reports/production/by-farm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductionByFarm()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductionByFarm$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<MonthlyProductionByFarm>>> {

    const rb = new RequestBuilder(this.rootUrl, ReportResourceService.GetProductionByFarmPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MonthlyProductionByFarm>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductionByFarm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductionByFarm(params?: {
  },
  context?: HttpContext

): Observable<Array<MonthlyProductionByFarm>> {

    return this.getProductionByFarm$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<MonthlyProductionByFarm>>) => r.body as Array<MonthlyProductionByFarm>)
    );
  }

  /**
   * Path part for operation getProductionSummary
   */
  static readonly GetProductionSummaryPath = '/api/reports/production-summary';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getProductionSummary()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductionSummary$Response(params?: {
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<ProductionSummaryDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ReportResourceService.GetProductionSummaryPath, 'get');
    if (params) {
      rb.query('startDate', params.startDate, {});
      rb.query('endDate', params.endDate, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ProductionSummaryDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getProductionSummary$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getProductionSummary(params?: {
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<Array<ProductionSummaryDto>> {

    return this.getProductionSummary$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<ProductionSummaryDto>>) => r.body as Array<ProductionSummaryDto>)
    );
  }

  /**
   * Path part for operation getFarmSummary
   */
  static readonly GetFarmSummaryPath = '/api/reports/farm-summary';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getFarmSummary()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFarmSummary$Response(params?: {
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<FarmSummaryDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ReportResourceService.GetFarmSummaryPath, 'get');
    if (params) {
      rb.query('startDate', params.startDate, {});
      rb.query('endDate', params.endDate, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<FarmSummaryDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getFarmSummary$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getFarmSummary(params?: {
    startDate?: string;
    endDate?: string;
  },
  context?: HttpContext

): Observable<Array<FarmSummaryDto>> {

    return this.getFarmSummary$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<FarmSummaryDto>>) => r.body as Array<FarmSummaryDto>)
    );
  }

}
