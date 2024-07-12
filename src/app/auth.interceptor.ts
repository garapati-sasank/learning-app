import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { filter, tap } from 'rxjs';
import { CarService } from './car.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  console.log('req', req);

  const carServices = inject(CarService);
  

  const token = sessionStorage.getItem('app_token');

  const headers = req.headers.set('Authorization', 'Bearer '+token);
  const updatedReq = req.clone({headers});
  return next(updatedReq).pipe(
    filter((event) => event instanceof HttpResponse),
    tap(() => console.log('auth resp inter...'))
  );
};
