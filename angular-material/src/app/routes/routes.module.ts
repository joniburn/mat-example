import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

import { AppMaterialModule } from '../app-material.module';

import { TopComponent } from './top/top.component';
import { FeaturesComponent } from './features/features.component';
import { AddressFormComponent } from './features/address-form/address-form.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { TableComponent } from './features/table/table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    AppMaterialModule,
  ],
  declarations: [TopComponent, FeaturesComponent, AddressFormComponent, DashboardComponent, TableComponent]
})
export class RoutesModule { }
