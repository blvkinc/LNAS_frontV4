import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError, Observable, switchMap, throwError} from 'rxjs';
import {AuthDataService} from './auth-data.service';
import {AuthResourceService} from '../api/services/auth-resource.service';
import {AuthResponseDto} from '../api/models/auth-response-dto';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authDataService: AuthDataService,
    private authService: AuthResourceService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!request.url.includes('/auth/register') && !request.url.includes('/auth/login') && !request.url.includes('/auth/is-email-available') ) {

      const token = this.authDataService.getAccessToken();
      request = this.addTokenToRequest(request, token);

      return next.handle(request).pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401 && token) {
            // Token expired or invalid, try refreshing
            return this.authService.refreshToken({
              body: {refreshToken: this.authDataService.getRefreshToken()},
            }).pipe(
              switchMap((response: AuthResponseDto) => {
                // Update the token in localStorage
                localStorage.setItem('auth', JSON.stringify(response));

                // Retry the failed request with the new token
                const retryRequest = this.addTokenToRequest(request, response.accessToken);
                return next.handle(retryRequest);
              }),
              catchError((refreshError: any) => {
                // Handle token refresh error (e.g., redirect to login page)
                console.error('Token refresh failed:', refreshError);
                // You may choose to redirect to a login page or do other error handling here
                return throwError(() => refreshError);
              }),
            );
          }
          // Pass through other errors
          return throwError(() => error);
        }),
      );
    } else {
      return next.handle(request);
    }
  }

  private addTokenToRequest(request: HttpRequest<any>, token: string | null): HttpRequest<any> {
    if (token) {
      return request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return request;
  }

}
