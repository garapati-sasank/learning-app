import { Component, OnInit, inject } from '@angular/core';
import { CarService } from '../car.service';
import { VehicleI, VehicleResponseI } from '../Custom-interfaces';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss',
})
export class CarComponent implements OnInit {
  carInfo: VehicleI[] = [];

  // carServices = inject(CarService);

  constructor(private carServices: CarService) {
    
  }

  ngOnInit(): void {
    this.getCarData();
  }

  getCarData(): void {
    this.carServices.logicForCarData$().subscribe(
      (response: VehicleResponseI) => {
        console.log(response);
        this.carInfo = response.Results;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
