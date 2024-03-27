import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityOverviewComponent } from './university-overview.component';

const routes: Routes = [
  {path:'', component:UniversityOverviewComponent}
]
 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UniversityOverviewRoutingModule { }
