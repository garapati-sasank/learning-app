import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { filter, tap } from 'rxjs';

export const apiHeadersInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('header inte...');
  
  return next(req).pipe(
    
    tap(() => console.log('header resp inter...'))
  );
};
