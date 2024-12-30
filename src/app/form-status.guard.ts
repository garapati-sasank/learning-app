import { CanActivateFn } from '@angular/router';

export const formStatusGuard: CanActivateFn = (route, state) => {
  return false;
};