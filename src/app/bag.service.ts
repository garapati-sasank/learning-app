import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BagService {

  carsAddedToBag = [];
  

  constructor() { }

  addSelectedCarToBag(selectedVehicleInfo: any) {
    console.log(this.carsAddedToBag);
    this.carsAddedToBag.push(selectedVehicleInfo);
    console.log(this.carsAddedToBag);

  }
}
