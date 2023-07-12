/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { UserResourceService } from './services/user-resource.service';
import { TransactionResourceService } from './services/transaction-resource.service';
import { SupplierResourceService } from './services/supplier-resource.service';
import { SalaryResourceService } from './services/salary-resource.service';
import { PurchaseResourceService } from './services/purchase-resource.service';
import { ProductionResourceService } from './services/production-resource.service';
import { PlantResourceService } from './services/plant-resource.service';
import { OrderResourceService } from './services/order-resource.service';
import { FarmResourceService } from './services/farm-resource.service';
import { EmployeeResourceService } from './services/employee-resource.service';
import { CustomerResourceService } from './services/customer-resource.service';
import { AuthResourceService } from './services/auth-resource.service';
import { ReportResourceService } from './services/report-resource.service';
import { DashboardResourceService } from './services/dashboard-resource.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    UserResourceService,
    TransactionResourceService,
    SupplierResourceService,
    SalaryResourceService,
    PurchaseResourceService,
    ProductionResourceService,
    PlantResourceService,
    OrderResourceService,
    FarmResourceService,
    EmployeeResourceService,
    CustomerResourceService,
    AuthResourceService,
    ReportResourceService,
    DashboardResourceService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
