import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { catchError, filter, of, tap, throwError } from 'rxjs';

export const apiHeadersInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('header inte...');
  
  return next(req).pipe(
    catchError((e) =>  throwError(() => e)),
    tap(() => console.log('header resp inter...'))
  );
};
