import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppMdcModule } from './app-mdc.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RoutesModule } from './routes/routes.module';
import { AppBarService } from './app-bar.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppMdcModule,
    AppRoutingModule,

    RoutesModule,
  ],
  providers: [
    AppBarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
