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
  vehicheApiErrorInfo = null;
  isLoading = false;

  // carServices = inject(CarService);

  constructor(private carServices: CarService) {
    
  }

  ngOnInit(): void {
   //  this.getCarData();
  }

  getCarData(): void {
    this.isLoading = true;
   this.vehicheApiErrorInfo = null;
    this.carServices.logicForCarData$().subscribe(
      (response: VehicleResponseI) => {
        this.isLoading = false;
        console.log(response);
        this.carInfo = response.Results;
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
        this.vehicheApiErrorInfo = {
          isError: true,
          message: "This is not avaliable now. Please try again later."
        }
      }
    );
  }
}
