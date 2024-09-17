import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrl: './car-card.component.scss'
})
export class CarCardComponent {

  @Input() makeName: string;
  @Input() vehicleTypeName: string;
  @Input() vehicleTypeId: number;
  @Input() makeId: number;
}
