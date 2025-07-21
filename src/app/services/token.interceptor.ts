import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';

export const TokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  console.log('Interceptor is running!');

  const modifiedReq = token
    ? req.clone({
        setHeaders: {
          Authorization: `i can i will  ${token}`
        }
      })
    : req;

  return next(modifiedReq).pipe(
    tap(event => {
      if (event instanceof HttpResponse) {
        const responseData = event.body;
        console.log('✅ Response Data:', responseData);
        if (responseData) {
          localStorage.setItem('lastResponse', JSON.stringify(responseData));
        }
      }
    }),
    catchError((error) => {
      console.log('❌ Interceptor caught error:', error.status);
      return throwError(() => error);
    })
  );
};


