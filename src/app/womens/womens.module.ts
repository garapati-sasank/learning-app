import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WomensRoutingModule } from './womens-routing.module';
import { WomensComponent } from './womens.component';


@NgModule({
  declarations: [
    WomensComponent
  ],
  imports: [
    CommonModule,
    WomensRoutingModule
  ]
})
export class WomensModule { }
