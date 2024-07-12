import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  userNameSubject = new BehaviorSubject<string>('');
  username$ = this.userNameSubject.asObservable();

  userRole = '';


  constructor() { }


  setUserName(userName: string) {
    this.userNameSubject.next(userName);
  }

  setRole(role: string) {
    this.userRole = role;
  }
}
