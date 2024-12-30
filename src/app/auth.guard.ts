import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { CommunicationService } from './communication.service';

export const authGuard: CanActivateFn = (route, state) => {
  // checlk logged  in user role
  // if role is admin then rutrn true, if not return false
  console.log('guard1 running')
  let communicationService = inject(CommunicationService)
  let isAdminRole: boolean = communicationService.userRole === 'student';
  return isAdminRole;
};