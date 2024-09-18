import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss'
})
export class CarCardComponent {

  @Input() vehicleInfo: any;

  onAddToCartCLick() {
    console.log(this.vehicleInfo);
  }

}
