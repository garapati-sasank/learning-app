import { Component } from '@angular/core';

@Component({
    selector: 'app-university-output',
    templateUrl: './university-output.component.html',
    styleUrl: './university-output.component.scss',
    standalone: false
})
export class UniversityOutputComponent {

  universityListFromForm: any;

  universityListEmitter(event) {
    console.log(event);
    this.universityListFromForm = event;
  }
}