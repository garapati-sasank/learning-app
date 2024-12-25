import { Component, OnInit, inject } from '@angular/core';
import { CarService } from '../car.service';
import { VehicleI, VehicleResponseI } from '../Custom-interfaces';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss',
})
export class CarComponent implements OnInit {
  // carInfo: VehicleI[] = [];
  carInfo$: Observable<VehicleResponseI>;
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

   this.carInfo$ = this.carServices.logicForCarData$().pipe(
    map((backEndRespData) => {
     let updatedResults =  backEndRespData.Results.map((car) =>{
               return {...car, customId: `${car.MakeId}${car.VehicleTypeId}`}
             })
             return {...backEndRespData, Results: updatedResults}
    })
   )

    // this.carServices.logicForCarData$().subscribe(
    //   (response: VehicleResponseI) => {
    //     this.isLoading = false;
    //     console.log(response);
    //     this.carInfo = response.Results.map((car) =>{
    //       return {...car, customId: `${car.MakeId}${car.VehicleTypeId}`}
    //     } );
    //   },
    //   (error) => {
    //     console.log(error);
    //     this.isLoading = false;
    //     this.vehicheApiErrorInfo = {
    //       isError: true,
    //       message: "This is not avaliable now. Please try again later."
    //     }
    //   }
    // );
  }
}
