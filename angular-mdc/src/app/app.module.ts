import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppMdcModule } from './app-mdc.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppMdcModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
