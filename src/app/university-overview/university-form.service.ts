import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UniversityFormService {
  http = inject(HttpClient);

  extractTheUniversityList() {
    return this.http
      .get('http://universities.hipolabs.com/search?country=United+Kingdom')
      .pipe(
        map((resp: any[]) => this.addNewPropToCollegeObjBasedOnDomains(resp))
      );
  }
  addNewPropToCollegeObjBasedOnDomains(resp: any[]) {
    let updatedUniversitieList = [];
    resp.forEach((university) => {
      let updatedUniversity = {};
      if (university.domains.length > 1) {
        updatedUniversity = { ...university, collegeType: 'Atonomous' };
      } else {
        updatedUniversity = { ...university, collegeType: 'Regular' };
      }
      updatedUniversitieList.push(updatedUniversity);
    });
    return updatedUniversitieList;
  }
}