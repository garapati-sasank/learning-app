import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { VehicleResponseI } from './Custom-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {

  constructor(private http: HttpClient) {}
  // http = inject(HttpClient);
logicForCarData$(): Observable<VehicleResponseI> {
    return this.http.get<VehicleResponseI>(
      'https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json'
    );
  }
  }