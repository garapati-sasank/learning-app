import { CanActivateFn } from '@angular/router';

export const formStatusGuard: CanActivateFn = (route, state) => {
  console.log('Deactivate guard...');
  
  return true;
};
