import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewslistComponent } from './newslist/newslist.component';
import { CountriesComponent } from './countries/countries.component';
import { CurrencyXconverterComponent } from './currency-xconverter/currency-xconverter.component';
import { FormsModule } from '@angular/forms';
import { WeatherappComponent } from './weatherapp/weatherapp.component';


@NgModule({
  declarations: [
    AppComponent,
    NewslistComponent,
    CountriesComponent,
    CurrencyXconverterComponent,
    WeatherappComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
