import { Component, inject } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { VehicleResponseI } from '../Custom-interfaces';

@Component({
  selector: 'app-vehicle-overview',
  templateUrl: './vehicle-overview.component.html',
  styleUrl: './vehicle-overview.component.scss',
})
export class VehicleOverviewComponent {

  vehiclesList = [];
  vehicleServices = inject(VehicleService);

  constructor() {
    this.getVehiclesData();
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
