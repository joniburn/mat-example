/*
 * Angular Materialのコンポーネントをインポートするモジュール。
 */

import { NgModule } from '@angular/core';

// 使いたいAngular Materialのモジュールを列挙する。
// 名前順でソートすること
import {
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatOptionModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
} from '@angular/material';

// 上のimportを名前順でソートしてからコピペ
const MAT_MODULES = [
  MatButtonModule,
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatOptionModule,
  MatProgressBarModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule,
];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES,
})
export class AppMaterialModule { }
