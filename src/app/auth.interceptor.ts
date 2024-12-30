import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, delay, filter, of, tap, throwError } from 'rxjs';
import { CarService } from './car.service';
import { SpinnerService } from './spinner.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  let spinnerService = inject(SpinnerService)
  console.log('req', req);
  const carServices = inject(CarService);
  spinnerService.updateLoadingStatus(true);
  const token = sessionStorage.getItem('app_token');
  const headers = req.headers.set('Authorization', 'Bearer ' + token);
  const updatedReq = req.clone({ headers });
  return next(updatedReq).pipe(
    delay(2000),
    catchError((e) => {
      spinnerService.updateLoadingStatus(false);
      return throwError(() => e);
    }),
    filter((event) => event instanceof HttpResponse),
    tap(() => {
      console.log('auth resp inter...')
      spinnerService.updateLoadingStatus(false);
    })
  );
};