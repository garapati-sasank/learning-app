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
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { TopsComponent } from './sale/tops/tops.component';
import { BottomsComponent } from './sale/bottoms/bottoms.component';
import { AccessoriesComponent } from './sale/accessories/accessories.component';
import { FootWearComponent } from './sale/foot-wear/foot-wear.component';
import { UniversityOutputComponent } from './university-output/university-output.component';
import { UniversityOutputFormComponent } from './university-output/university-output-form/university-output-form.component';
import { UniversityOutputTableComponent } from './university-output/university-output-table/university-output-table.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { PhoneNumberPipe } from './phone-number.pipe';
import { KidsEditComponent } from './kids/kids-edit/kids-edit.component';
import { KidsOverviewComponent } from './kids/kids-overview/kids-overview.component';
import { authInterceptor } from './auth.interceptor';
import { apiHeadersInterceptor } from './api-headers.interceptor';
import { VehicleOverviewComponent } from './vehicle-overview/vehicle-overview.component';
import { CarComponent } from './car/car.component';
import { CarCardComponent } from './car/car-card/car-card.component';

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
    LoginComponent,
    SignupComponent,
    PhoneNumberPipe,
    KidsEditComponent,
    KidsOverviewComponent,
    VehicleOverviewComponent,
    CarComponent,
    CarCardComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
   provideHttpClient(withInterceptors([authInterceptor, apiHeadersInterceptor]))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// 5678908906
// 708-098-0987
// (203) 675-8765  