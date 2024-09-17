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
import { UniversityOutputComponent } from './university-output/university-output.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { KidsEditComponent } from './kids/kids-edit/kids-edit.component';
import { KidsOverviewComponent } from './kids/kids-overview/kids-overview.component';
import { authGuard } from './auth.guard';
import { ageGuard } from './age.guard';
import { VehicleOverviewComponent } from './vehicle-overview/vehicle-overview.component';
import { CarComponent } from './car/car.component';
import { formStatusGuard } from './form-status.guard';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  // { path: '', redirectTo: 'car', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'mens', component: MensComponent},
  {
    path: 'womens',
    canLoad: [authGuard],
    loadChildren: () =>
      import('./womens/womens.module').then((m) => m.WomensModule),
  },
  {
    path: 'uscis',
    component: UscisComponent,
    canActivate: [authGuard, ageGuard],
    canDeactivate: [formStatusGuard]
  },
  {
    path: 'kids',
    component: KidsOverviewComponent,
    children: [
      { path: '', redirectTo: 'table', pathMatch: 'full' },
      { path: 'table', component: KidsComponent },
      { path: 'edit/:id', component: KidsEditComponent },
    ],
  },
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
    canMatch: [authGuard, ageGuard],

  },
  {
    path: 'university-lazy-loading',
    loadChildren: () =>
      import('./university-overview/university-overview.module').then(
        (m) => m.UniversityOverviewModule
      ),
  },
  { path: 'output', component: UniversityOutputComponent },
  { path: 'vehicle', component: VehicleOverviewComponent },
  { path: 'car', component: CarComponent },
  { path: 'about', component: AboutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {} 