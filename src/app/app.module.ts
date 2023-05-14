import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { Section1Component } from './components/section1/section1.component';
import { Section2Component } from './components/section2/section2.component';
import { Section3Component } from './components/section3/section3.component';
import { Section4Component } from './components/section4/section4.component';
import { Section5Component } from './components/section5/section5.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    Section1Component,
    Section2Component,
    Section3Component,
    Section4Component,
    Section5Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
