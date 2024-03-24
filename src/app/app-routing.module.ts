import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensComponent } from './mens/mens.component';
import { UscisComponent } from './uscis/uscis.component';
import { KidsComponent } from './kids/kids.component';
import { SaleComponent } from './sale/sale.component';
import { SalesTestComponent } from './sales-test/sales-test.component';
import { UniversityComponent } from './university/university.component';
import { TopsComponent } from './sale/tops/tops.component';
import { BottomsComponent } from './sale/bottoms/bottoms.component';
import { AccessoriesComponent } from './sale/accessories/accessories.component';
import { FootWearComponent } from './sale/foot-wear/foot-wear.component';

const routes: Routes = [
  { path: 'mens', component: MensComponent },
  {
    path: 'womens',
    loadChildren: () =>
      import('./womens/womens.module').then((m) => m.WomensModule),
  },
  { path: 'xyz', component: UscisComponent },
  { path: 'kids', component: KidsComponent },
  {
    path: 'sale',
    component: SaleComponent,
    children: [
      { path: '', redirectTo: 'tops', pathMatch: 'full' },
      { path: 'tops', component: TopsComponent },
      { path: 'bottoms', component: BottomsComponent },
      { path: 'accessories', component: AccessoriesComponent },
      { path: 'foot-wear', component: FootWearComponent },
    ],
  },
  { path: 'sale1', component: SalesTestComponent },
  { path: 'university', component: UniversityComponent },
  {
    path: 'women-sale',
    loadChildren: () =>
      import('./women-sale/women-sale.module').then((m) => m.WomenSaleModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
