import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { VehicleI } from './Custom-interfaces';

@Injectable({
  providedIn: 'root'
})
export class BagService {

  // carsAddedToBag = [];
  carsAddedToBagBs = new BehaviorSubject<VehicleI[]>([]);
  carsAddedToBagBs$ = this.carsAddedToBagBs.asObservable();

  constructor() { }

  addSelectedCarToBag(selectedVehicleInfo: VehicleI) {
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

  removeCarFromCart(vehicleToBeRemoved: VehicleI) {
    let existingCarsInBag = this.carsAddedToBagBs.value;
    let indexToBeRemoved = existingCarsInBag.findIndex((car) => {
      return car.customId === vehicleToBeRemoved.customId
    })
    existingCarsInBag.splice(indexToBeRemoved, 1);
    this.carsAddedToBagBs.next(existingCarsInBag);
  }
}