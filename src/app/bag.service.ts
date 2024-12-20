import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BagService {

  // carsAddedToBag = [];
  carsAddedToBagBs = new BehaviorSubject<any>([]);
  carsAddedToBagBs$ = this.carsAddedToBagBs.asObservable();


  constructor() { }

  addSelectedCarToBag(selectedVehicleInfo: any) {
    // console.log(this.carsAddedToBag);
    // this.carsAddedToBag.push(selectedVehicleInfo);
   // this.carsAddedToBag = selectedVehicleInfo;
    // console.log(this.carsAddedToBag);
    let existingCarsInBag = this.carsAddedToBagBs.value;
    // console.log(existingCarsInBag);
    existingCarsInBag.push(selectedVehicleInfo);
   // console.log(existingCarsInBag);
    this.carsAddedToBagBs.next(existingCarsInBag);

  }

  
}
