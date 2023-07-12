import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ApiModule} from './api/api.module';
import {NgApexchartsModule} from 'ng-apexcharts';
import {SecurityModule} from './security/security.module';
import {AuthInterceptor} from './security/auth.interceptor';
import {ToastrModule} from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ApiModule.forRoot({rootUrl: 'http://localhost:8080'}),
    ToastrModule.forRoot({
        positionClass: 'toast-bottom-right',
        preventDuplicates: true,
        timeOut: 5000,
        progressBar: true,
        progressAnimation: 'increasing',
        newestOnTop: true,
        closeButton: true,
        maxOpened: 1,
    }),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgApexchartsModule,
    SecurityModule,
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
