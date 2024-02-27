import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { UscisComponent } from './uscis/uscis.component';
import { KidsComponent } from './kids/kids.component';
import { SaleComponent } from './sale/sale.component';
import { SalesTestComponent } from './sales-test/sales-test.component';

const routes: Routes = [
  { path: 'mens', component: MensComponent },
  { path: 'womens', component: WomensComponent },
  { path: 'xyz', component: UscisComponent },
  { path: 'kids', component: KidsComponent },
  { path: 'sale', component: SaleComponent },
  { path: 'sale1', component: SalesTestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
