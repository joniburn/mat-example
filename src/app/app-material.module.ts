/*
 * Angular Materialのコンポーネントをインポートするモジュール。
 */

import { NgModule } from '@angular/core';

// 使いたいAngular Materialのモジュールを列挙する。
// 名前順でソートすること
import {
  MatButtonModule,
} from '@angular/material';

// 上のimportを名前順でソートしてからコピペ
const MAT_MODULES = [
  MatButtonModule,
];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES,
})
export class AppMaterialModule { }
