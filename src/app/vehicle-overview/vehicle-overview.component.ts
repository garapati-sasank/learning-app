import { Component, inject } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { VehicleResponseI } from '../Custom-interfaces';

@Component({
    selector: 'app-vehicle-overview',
    templateUrl: './vehicle-overview.component.html',
    styleUrl: './vehicle-overview.component.scss',
    standalone: false
})
export class VehicleOverviewComponent {

  name = 'sasi';

  vehiclesList = [];
  vehicleServices = inject(VehicleService);

  constructor() {
    this.getVehiclesData();
  }

  testZoneChanges() {
    console.log('func exec......');
    return 'Zone test scenarios...'
  }

  updateName() {
    //this.name = 'sasi G';
  }

  getVehiclesData(): void {
    this.vehicleServices.logicForVehicleData().subscribe(
      (response: VehicleResponseI) => {
        console.log(response);
        this.vehiclesList = response.Results;
      },
      (error) => {}
    );
  }
}