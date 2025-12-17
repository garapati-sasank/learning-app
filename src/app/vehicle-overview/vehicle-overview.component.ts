import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { VehicleResponseI } from '../Custom-interfaces';

@Component({
    selector: 'app-vehicle-overview',
    templateUrl: './vehicle-overview.component.html',
    styleUrl: './vehicle-overview.component.scss',
    standalone: false,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class VehicleOverviewComponent {

  courseTypes = [
    { code: 'M', description: 'Music', active: false},
    { code: 'I', description: 'IT', active: false},
    { code: 'I', description: 'Info Tech', active: true},
    { code: 'S', description: 'Swimming', active: false},
    { code: 'S', description: 'Swim Tech', active: true}
  ];

  cdr = inject(ChangeDetectorRef);

  name = 'sasi';

  vehiclesList = [];
  vehicleServices = inject(VehicleService);

  constructor() {
    // this.getVehiclesData();
    this.updateCourses();
  }

  updateCourses() {
    let duplicatekeys = {};
    this.courseTypes.forEach((course) => {
      if(duplicatekeys.hasOwnProperty(course.code)) {
        duplicatekeys[course.code] = duplicatekeys[course.code]+1;
      } else {
        duplicatekeys[course.code] = 1;
      }
    });
    console.log(duplicatekeys);
    const dupKeysArray = Object.keys(duplicatekeys).filter(key => duplicatekeys[key] > 1);
    console.log(dupKeysArray);
  }

  testZoneChanges() {
    console.log('func exec......');
    return 'Zone test scenarios...'
  }

  updateName() {
    setTimeout(() => {
      this.name = 'sasi G';
      this.cdr.detectChanges();
    }, 3000);
    // this.vehicleServices.logicForVehicleData().subscribe(
    //   (response: VehicleResponseI) => {
    //     console.log(response);
    //     this.vehiclesList = response.Results;
    //     this.name = 'sasi G';
    //   },
    //   (error) => {}
    // );

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