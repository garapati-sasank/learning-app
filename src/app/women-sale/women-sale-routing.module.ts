import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WomenSaleComponent } from './women-sale.component';
import { TopsComponent } from './tops/tops.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { AccesoriesComponent } from './accesories/accesories.component';

const routes: Routes = [
  {path: '', component: WomenSaleComponent, children:[
    {path:'tops', component: TopsComponent},
    {path:'bottoms', component: BottomsComponent},
    {path:'accesories', component: AccesoriesComponent}
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WomenSaleRoutingModule { }
