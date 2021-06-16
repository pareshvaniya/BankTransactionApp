import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { LoanDetailsComponent } from './loan-details/loan-details.component';
import { LoanDetailsService } from './loan-details.service';

@NgModule({
  declarations: [
    AppComponent,
    LoanDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [LoanDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
