import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppMdcModule } from '../app-mdc.module';

import { TopComponent } from './top/top.component';
import { TopAppBarComponent } from './top-app-bar/top-app-bar.component';

@NgModule({
  imports: [
    FormsModule,
    AppMdcModule,
  ],
  declarations: [
    TopComponent,
    TopAppBarComponent,
  ],
})
export class RoutesModule { }
