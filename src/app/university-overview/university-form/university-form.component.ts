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
  

  logicToGetUniversityList(){
    this.universityformservice.extractTheUniversityList().subscribe(
      (response: any)=>{
        console.log(response);
        this.universitiesList = response;

      },
      (error)=>{}
    )
  }

}

// this.myFun(100)

// myFun(value1: number) {

//   //
//   //
//   //
//   //
//   //
// }