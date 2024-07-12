import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-university-output-table',
  templateUrl: './university-output-table.component.html',
  styleUrl: './university-output-table.component.scss'
})
export class UniversityOutputTableComponent {

  @Input() universityListFromForm: any;

}
