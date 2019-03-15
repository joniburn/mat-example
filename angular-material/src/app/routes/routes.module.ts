import { NgModule } from '@angular/core';
import { TopComponent } from './top/top.component';

import { AppMaterialModule } from '../app-material.module';
import { FeaturesComponent } from './features/features.component';

@NgModule({
  imports: [
    AppMaterialModule,
  ],
  declarations: [TopComponent, FeaturesComponent]
})
export class RoutesModule { }
