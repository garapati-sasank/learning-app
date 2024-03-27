import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UniversityFormService {

  http = inject(HttpClient);

  extractTheUniversityList(){
    return this.http.get('http://universities.hipolabs.com/search?country=United+Kingdom')

  }

  constructor() { }
}
