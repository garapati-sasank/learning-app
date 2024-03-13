import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversityService {

 http = inject(HttpClient);
  
  logicToGetUniversityList(){
    return this.http.get('https://api.usaspending.gov/api/v2/references/toptier_agencies/');
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

// RETRIEVE - GET
// CREATE   - POST
// UPDATE - PUT
// DELETE - Delete

// GET - http://universities.hipolabs.com/search?country=United+Kingdom