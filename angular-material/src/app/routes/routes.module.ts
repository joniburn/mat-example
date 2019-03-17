import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LayoutModule } from '@angular/cdk/layout';

import { AppMaterialModule } from '../app-material.module';

import { TopComponent } from './top/top.component';
import { SchematicsComponent } from './schematics/schematics.component';
import { AddressFormComponent } from './schematics/address-form/address-form.component';
import { DashboardComponent } from './schematics/dashboard/dashboard.component';
import { TableComponent } from './schematics/table/table.component';
import { TreeComponent } from './schematics/tree/tree.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule,
    AppMaterialModule,
  ],
  declarations: [TopComponent, SchematicsComponent, AddressFormComponent, DashboardComponent, TableComponent, TreeComponent]
})
export class RoutesModule { }
