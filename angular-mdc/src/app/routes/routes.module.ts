import { NgModule } from '@angular/core';

import { AppMdcModule } from '../app-mdc.module';

import { TopComponent } from './top/top.component';

@NgModule({
  imports: [
    AppMdcModule,
  ],
  declarations: [
    TopComponent,
  ],
})
export class RoutesModule { }
