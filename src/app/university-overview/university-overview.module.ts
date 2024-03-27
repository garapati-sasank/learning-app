import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UniversityOverviewRoutingModule } from './university-overview-routing.module';
import { UniversityOverviewComponent } from './university-overview.component';
import { UniversityFormComponent } from './university-form/university-form.component';
import { UniversityTableComponent } from './university-table/university-table.component';


@NgModule({
  declarations: [
    UniversityOverviewComponent,
    UniversityFormComponent,
    UniversityTableComponent
  ],
  imports: [
    CommonModule,
    UniversityOverviewRoutingModule
  ]
})
export class UniversityOverviewModule { }
