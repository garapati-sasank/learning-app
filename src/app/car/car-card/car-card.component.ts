import { Component, inject, Input, OnInit } from '@angular/core';
import { BagService } from '../../bag.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss'
})
export class CarCardComponent implements OnInit {

  bagService =inject(BagService)
  @Input() vehicleInfo: any;

  //existingVehiclesInCart = [];
  showCart = true;


  ngOnInit(): void {
    this.bagService.carsAddedToBagBs$.subscribe((d) => {
      // this.existingVehiclesInCart = d;
      this.showCart = d.find((vehicleFromCart) => vehicleFromCart.VehicleTypeId === this.vehicleInfo.VehicleTypeId && vehicleFromCart.MakeId === this.vehicleInfo.MakeId)
    })
  }

  onAddToCartCLick() {
    // console.log(this.vehicleInfo);
    this.bagService.addSelectedCarToBag(this.vehicleInfo)
  }



}


// t && t = t
// t && f = f
// f && t = f
// f && f = f

// t || t = t
// t || f = t
// f || t = t
// f || f = f


