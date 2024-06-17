import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { CardComponent } from './card/card.component';
import { PriceComponent } from './price/price.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';
import { CalendarModule } from 'primeng/calendar';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { AllFreelanceComponent } from './all-freelance/all-freelance.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PriceComponent,
    FormComponent,
    HomeComponent,
    HeaderComponent,
    AllFreelanceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    RadioButtonModule,
    CalendarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
