import { NgModule } from '@angular/core';

import { AppMdcModule } from '../app-mdc.module';

import { TopComponent } from './top/top.component';
import { TopAppBarComponent } from './top-app-bar/top-app-bar.component';

@NgModule({
  imports: [
    AppMdcModule,
  ],
  declarations: [
    TopComponent,
    TopAppBarComponent,
  ],
})
export class RoutesModule { }
