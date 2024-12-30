import { CanActivateFn } from '@angular/router';

export const ageGuard: CanActivateFn = (route, state) => {
  console.log('guard2 running')
return true;
};