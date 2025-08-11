import { catchError, tap, finalize } from 'rxjs/operators';
import { throwError } from 'rxjs';
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../loader.service';

export const TokenInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);
  const loaderService = inject(LoaderService); // ✅ Inject loader service

  const modifiedReq = token
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      })
    : req;

  const startTime = Date.now();

  // ✅ Start loader before request
  loaderService.show();

  return next(modifiedReq).pipe(
    tap((event) => {
      if (event instanceof HttpResponse) {
        const elapsedTime = Date.now() - startTime;
        console.log(`✅ ${req.url} responded in ${elapsedTime}ms`);
        localStorage.setItem('lastResponse', JSON.stringify(event.body));
      }
    }),

    catchError((error: HttpErrorResponse) => {
      console.error('❌ API Error caught by interceptor:', {
        status: error.status,
        message: error.message,
        url: req.url,
      });

      if (error.status === 401) {
        localStorage.removeItem('token');
        router.navigate(['/login']);
      }

      return throwError(() => error);
    }),

    // ✅ This finalize block was causing the error – now fixed!
    finalize(() => {
      loaderService.hide();
    })
  );
};

