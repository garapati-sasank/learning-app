import { Component, inject } from '@angular/core';
import { UniversityFormService } from '../university-form.service';

@Component({
  selector: 'app-university-form',
  templateUrl: './university-form.component.html',
  styleUrl: './university-form.component.scss'
})
export class UniversityFormComponent {

  universityformservice = inject(UniversityFormService)
  universitiesList: any;

  logicToGetUniversityList() {
    this.universityformservice.extractTheUniversityList().subscribe(
      (response: any) => {
        console.log(response);
        // logic to go into each and every obj in array and find how many domains in there, add new property in every obj, if you find 1 domanin then value should be Ragular, if 
        this.universitiesList = response;
      },
      (error) => { }
    )
  }
}