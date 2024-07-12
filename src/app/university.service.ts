import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { AgenciesResponseI } from './Custom-interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

 http = inject(HttpClient);
  
  logicToGetUniversityList(): Observable<AgenciesResponseI> {
    return this.http.get<AgenciesResponseI>('https://api.usaspending.gov/api/v2/references/toptier_agencies/');
  }

  gettingTheFetchedUniversityList(){
   return this.http.get('http://universities.hipolabs.com/search?country=United+Kingdom')
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