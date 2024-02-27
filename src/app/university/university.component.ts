import { Component, inject } from '@angular/core';
import { UniversityService } from '../university.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrl: './university.component.scss'
})
export class UniversityComponent {

  universityService = inject(UniversityService);

  getTheUniversityList(){
    console.log('function called...');
    this.universityService.logicToGetUniversityList().subscribe(
      (universitiesListResponse: any) => {
        console.log(universitiesListResponse);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}

// someFunName() {

// }

// someFun(value1: number) {

// }

// someFun = (value1: number) => {

// } 

// someFunName = () => {

// }

// () {

// }

// (value1: number) => {

// }


