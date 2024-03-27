import { Component, EventEmitter, Output, inject } from '@angular/core';
import { UniversityFormService } from '../../university-overview/university-form.service';

@Component({
  selector: 'app-university-output-form',
  templateUrl: './university-output-form.component.html',
  styleUrl: './university-output-form.component.scss'
})
export class UniversityOutputFormComponent {

  universityformservice = inject(UniversityFormService)
 universitiesList: any;

 @Output() universityListEmitter = new EventEmitter<any>();

  logicToGetUniversityList(){
    this.universityformservice.extractTheUniversityList().subscribe(
      (response: any)=>{
        console.log(response);
        this.universityListEmitter.emit(response);
      },
      (error)=>{}
    )
  }

}
