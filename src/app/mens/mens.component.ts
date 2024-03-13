import { Component, inject } from '@angular/core';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrl: './mens.component.scss',
})
export class MensComponent {
  universityServices = inject(UniversityService);

  apiFetchingListResponses: any;
  province: any;

  constructor() {
    console.log('mens constructor...');
  }

  fetchingUniversities() {
    this.universityServices.gettingTheFetchedUniversityList().subscribe(
      (wright) => {
        this.apiFetchingListResponses = wright;
      },
      (wrong) => {}
    );
  }
}

//http://universities.hipolabs.com/search?country=United+Kingdom
//get

//Fetch All Universities
//

// function(v1: number, val2: an) {}
