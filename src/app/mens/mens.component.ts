import { Component, inject } from '@angular/core';
import { UniversityService } from '../university.service';
import { CommunicationService } from '../communication.service';

@Component({
  selector: 'app-mens',
  templateUrl: './mens.component.html',
  styleUrl: './mens.component.scss',
})
export class MensComponent {
  universityServices = inject(UniversityService);
  communicationService = inject(CommunicationService);

  apiFetchingListResponses: any;
province: any;
userName = '';
  

  constructor() {
    console.log('mens constructor...');
  this.communicationService.username$.subscribe(
    (data) => {
      console.log(data);
      this.userName = data;
    }
  )
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
