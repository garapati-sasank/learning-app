import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { filter, tap } from 'rxjs';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = sessionStorage.getItem('app_token');

  const headers = req.headers.set('Authorization', 'Bearer '+token);
  const updatedReq = req.clone({headers});
  return next(updatedReq).pipe(
    filter((event) => event instanceof HttpResponse),
    tap(() => console.log('auth resp inter...'))
  );
};
