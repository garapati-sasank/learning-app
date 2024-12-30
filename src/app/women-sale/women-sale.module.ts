import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomenSaleRoutingModule } from './women-sale-routing.module';
import { WomenSaleComponent } from './women-sale.component';
import { TopsComponent } from './tops/tops.component';
import { BottomsComponent } from './bottoms/bottoms.component';
import { AccesoriesComponent } from './accesories/accesories.component';


@NgModule({
  declarations: [
    WomenSaleComponent,
    TopsComponent,
    BottomsComponent,
    AccesoriesComponent
  ],
  imports: [
    CommonModule,
    WomenSaleRoutingModule
  ]
})
export class WomenSaleModule {}