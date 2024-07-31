import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AgenciesResponseI, AgencyI } from './Custom-interfaces';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

 http = inject(HttpClient);
  
  logicToGetUniversityList(): Observable<AgencyI[]> {
    return this.http.get<AgenciesResponseI>('https://api.usaspending.gov/api/v2/references/toptier_agencies/').pipe(
      tap((resp) => console.log(resp)),
      map((rep) => this.addNewPropBasedOnActiveYear(rep)),
      tap((resp) => console.log(resp)),
    );
  }

  addNewPropBasedOnActiveYear(rep: AgenciesResponseI): AgencyI[] {
    const updatedAgencies = rep.results.map(agency =>  ({...agency,  isActive: parseInt(agency.active_fy) >= 2022}) )
    return  updatedAgencies;
  }

  gettingTheFetchedUniversityList(){
   return this.http.get('http://universities.hipolabs.com/search?country=United+Kingdom')
  }

  saveData() {
    // thhtp call to check if id exist or not 
    // based on above response save info from another call

  }


  checkIfidExistApi() {
    return of(true)
  }

  addNewStudentApi() {
    return of('successfully saved')
  }
}

// checking acc balance 
// tranfer money
// updating address 

// check all studends info
// add new student 
// updated existing address 
// delete 

// CRUD
// RETRIEVE - GET
// CREATE   - POST
// UPDATE - PUT
// DELETE - Delete

// GET - http://universities.hipolabs.com/search?country=United+Kingdom

// ks10
// k sasi
// 25
