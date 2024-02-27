import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RelatedToolsComponent } from './related-tools/related-tools.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MensComponent } from './mens/mens.component';
import { WomensComponent } from './womens/womens.component';
import { KidsComponent } from './kids/kids.component';
import { SaleComponent } from './sale/sale.component';
import { UscisComponent } from './uscis/uscis.component';
import { SalesTestComponent } from './sales-test/sales-test.component';
import { UniversityComponent } from './university/university.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RelatedToolsComponent,
    FooterComponent,
    HeaderComponent,
    MensComponent,
    WomensComponent,
    KidsComponent,
    SaleComponent,
    UscisComponent,
    SalesTestComponent,
    UniversityComponent
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
