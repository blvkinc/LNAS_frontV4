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


@Injectable({
  providedIn: 'root',
})
export class DashboardResourceService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getWeeklySales1
   */
  static readonly GetWeeklySales1Path = '/api/dashboard/sales/weekly-sales';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWeeklySales1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeeklySales1$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
[key: string]: number;
}>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardResourceService.GetWeeklySales1Path, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        [key: string]: number;
        }>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getWeeklySales1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeeklySales1(params?: {
  },
  context?: HttpContext

): Observable<{
[key: string]: number;
}> {

    return this.getWeeklySales1$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: number;
}>) => r.body as {
[key: string]: number;
})
    );
  }

  /**
   * Path part for operation getTotalSales
   */
  static readonly GetTotalSalesPath = '/api/dashboard/sales/total-sales';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTotalSales()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTotalSales$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardResourceService.GetTotalSalesPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `getTotalSales$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTotalSales(params?: {
  },
  context?: HttpContext

): Observable<number> {

    return this.getTotalSales$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation getTotalProduction
   */
  static readonly GetTotalProductionPath = '/api/dashboard/sales/total-production';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTotalProduction()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTotalProduction$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardResourceService.GetTotalProductionPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `getTotalProduction$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTotalProduction(params?: {
  },
  context?: HttpContext

): Observable<number> {

    return this.getTotalProduction$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation getTotalCount
   */
  static readonly GetTotalCountPath = '/api/dashboard/sales/total-count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTotalCount()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTotalCount$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardResourceService.GetTotalCountPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `getTotalCount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTotalCount(params?: {
  },
  context?: HttpContext

): Observable<number> {

    return this.getTotalCount$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation getMonthlySales1
   */
  static readonly GetMonthlySales1Path = '/api/dashboard/sales/monthly-sales';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMonthlySales1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthlySales1$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardResourceService.GetMonthlySales1Path, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `getMonthlySales1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthlySales1(params?: {
  },
  context?: HttpContext

): Observable<number> {

    return this.getMonthlySales1$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation getMonthlyProduction1
   */
  static readonly GetMonthlyProduction1Path = '/api/dashboard/sales/monthly-production';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMonthlyProduction1()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthlyProduction1$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardResourceService.GetMonthlyProduction1Path, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `getMonthlyProduction1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthlyProduction1(params?: {
  },
  context?: HttpContext

): Observable<number> {

    return this.getMonthlyProduction1$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation getWeeklyPurchase
   */
  static readonly GetWeeklyPurchasePath = '/api/dashboard/purchase/weekly-purchase';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getWeeklyPurchase()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeeklyPurchase$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
[key: string]: number;
}>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardResourceService.GetWeeklyPurchasePath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        [key: string]: number;
        }>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getWeeklyPurchase$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getWeeklyPurchase(params?: {
  },
  context?: HttpContext

): Observable<{
[key: string]: number;
}> {

    return this.getWeeklyPurchase$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
[key: string]: number;
}>) => r.body as {
[key: string]: number;
})
    );
  }

  /**
   * Path part for operation getMonthlyProductionByWeek
   */
  static readonly GetMonthlyProductionByWeekPath = '/api/dashboard/production/monthly-production-by-week';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMonthlyProductionByWeek()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthlyProductionByWeek$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Array<{
}>>>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardResourceService.GetMonthlyProductionByWeekPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Array<{
        }>>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMonthlyProductionByWeek$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthlyProductionByWeek(params?: {
  },
  context?: HttpContext

): Observable<Array<Array<{
}>>> {

    return this.getMonthlyProductionByWeek$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Array<{
}>>>) => r.body as Array<Array<{
}>>)
    );
  }

  /**
   * Path part for operation getMonthlyProductionByAvailability
   */
  static readonly GetMonthlyProductionByAvailabilityPath = '/api/dashboard/production/monthly-production-by-availability';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMonthlyProductionByAvailability()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthlyProductionByAvailability$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Array<{
}>>>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardResourceService.GetMonthlyProductionByAvailabilityPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Array<{
        }>>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMonthlyProductionByAvailability$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthlyProductionByAvailability(params?: {
  },
  context?: HttpContext

): Observable<Array<Array<{
}>>> {

    return this.getMonthlyProductionByAvailability$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Array<{
}>>>) => r.body as Array<Array<{
}>>)
    );
  }

  /**
   * Path part for operation getMonthlyPlantCount
   */
  static readonly GetMonthlyPlantCountPath = '/api/dashboard/plant/monthly-count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMonthlyPlantCount()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthlyPlantCount$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardResourceService.GetMonthlyPlantCountPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `getMonthlyPlantCount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthlyPlantCount(params?: {
  },
  context?: HttpContext

): Observable<number> {

    return this.getMonthlyPlantCount$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation getMonthlyProductionByFarm
   */
  static readonly GetMonthlyProductionByFarmPath = '/api/dashboard/monthly-production-by-farm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMonthlyProductionByFarm()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthlyProductionByFarm$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<Array<{
}>>>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardResourceService.GetMonthlyProductionByFarmPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Array<{
        }>>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getMonthlyProductionByFarm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMonthlyProductionByFarm(params?: {
  },
  context?: HttpContext

): Observable<Array<Array<{
}>>> {

    return this.getMonthlyProductionByFarm$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<Array<{
}>>>) => r.body as Array<Array<{
}>>)
    );
  }

  /**
   * Path part for operation getActiveFarmsCount
   */
  static readonly GetActiveFarmsCountPath = '/api/dashboard/farms/active-count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getActiveFarmsCount()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActiveFarmsCount$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardResourceService.GetActiveFarmsCountPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `getActiveFarmsCount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getActiveFarmsCount(params?: {
  },
  context?: HttpContext

): Observable<number> {

    return this.getActiveFarmsCount$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * Path part for operation getTotalFarms
   */
  static readonly GetTotalFarmsPath = '/api/dashboard/Production/total-farm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTotalFarms()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTotalFarms$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, DashboardResourceService.GetTotalFarmsPath, 'get');
    if (params) {
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
   * To access the full response (for headers, for example), `getTotalFarms$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTotalFarms(params?: {
  },
  context?: HttpContext

): Observable<number> {

    return this.getTotalFarms$Response(params,context).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
