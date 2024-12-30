import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  noOfReq = [];
  private isLoadingBs = new BehaviorSubject(false);
  isLoading$ = this.isLoadingBs.asObservable();

  updateLoadingStatus(status: boolean) {
    // some$ = this.isLoading$.subscribe()
    // this.isLoadingBs.value
    if (status) {
      this.pushValueToArray()
    } else {
      this.takeOutValueFromArray()
    }
    this.isLoadingBs.next(this.noOfReq.length > 0);
  }
  pushValueToArray() {
    this.noOfReq.push(1);
  }
  takeOutValueFromArray() {
    this.noOfReq.pop();
  }
}