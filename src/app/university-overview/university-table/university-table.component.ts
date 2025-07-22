import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-university-table',
    templateUrl: './university-table.component.html',
    styleUrl: './university-table.component.scss',
    standalone: false
})
export class UniversityTableComponent {

 @Input() tableData: any;
}