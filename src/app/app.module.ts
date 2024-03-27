import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RelatedToolsComponent } from './related-tools/related-tools.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MensComponent } from './mens/mens.component';
import { KidsComponent } from './kids/kids.component';
import { SaleComponent } from './sale/sale.component';
import { UscisComponent } from './uscis/uscis.component';
import { SalesTestComponent } from './sales-test/sales-test.component';
import { UniversityComponent } from './university/university.component';
import { HttpClientModule } from '@angular/common/http';
import { TopsComponent } from './sale/tops/tops.component';
import { BottomsComponent } from './sale/bottoms/bottoms.component';
import { AccessoriesComponent } from './sale/accessories/accessories.component';
import { FootWearComponent } from './sale/foot-wear/foot-wear.component';
import { UniversityOutputComponent } from './university-output/university-output.component';
import { UniversityOutputFormComponent } from './university-output/university-output-form/university-output-form.component';
import { UniversityOutputTableComponent } from './university-output/university-output-table/university-output-table.component';

@NgModule({
  declarations: [
    AppComponent,
    RelatedToolsComponent,
    FooterComponent,
    HeaderComponent,
    MensComponent,
    KidsComponent,
    SaleComponent,
    UscisComponent,
    SalesTestComponent,
    UniversityComponent,
    TopsComponent,
    BottomsComponent,
    AccessoriesComponent,
    FootWearComponent,
    UniversityOutputComponent,
    UniversityOutputFormComponent,
    UniversityOutputTableComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
