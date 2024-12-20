import { Component, inject, Input } from '@angular/core';
import { BagService } from '../../bag.service';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss'
})
export class CarCardComponent {

  bagService =inject(BagService)
  @Input() vehicleInfo: any;

  onAddToCartCLick() {
    // console.log(this.vehicleInfo);
    this.bagService.addSelectedCarToBag(this.vehicleInfo)
  }



}
