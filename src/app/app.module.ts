import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LandingComponent } from './landing/landing.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { ProdSliderComponent } from './prod-slider/prod-slider.component';
import { ProductsComponent } from './products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    InquiryComponent,
    ProdSliderComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    IvyCarouselModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
