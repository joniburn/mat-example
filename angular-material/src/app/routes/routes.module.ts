import { NgModule } from '@angular/core';
import { TopComponent } from './top/top.component';

import { AppMaterialModule } from '../app-material.module';

@NgModule({
  imports: [
    AppMaterialModule,
  ],
  declarations: [TopComponent]
})
export class RoutesModule { }
