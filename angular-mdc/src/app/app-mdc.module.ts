/*
 * Angular MDCのコンポーネントをインポートするモジュール。
 */

import { NgModule } from '@angular/core';

// 使いたいAngular MDCのモジュールを列挙する。
// 名前順でソートすること
import {
  MdcButtonModule,
  MdcDrawerModule,
  MdcIconModule,
  MdcLinearProgressModule,
  MdcListModule,
  MdcTextFieldModule,
  MdcTopAppBarModule,
  MdcTypographyModule,
} from '@angular-mdc/web';

// 上のimportを名前順でソートしてからコピペ
const MDC_MODULES = [
  MdcButtonModule,
  MdcDrawerModule,
  MdcIconModule,
  MdcLinearProgressModule,
  MdcListModule,
  MdcTextFieldModule,
  MdcTopAppBarModule,
  MdcTypographyModule,
];

@NgModule({
  imports: MDC_MODULES,
  exports: MDC_MODULES,
})
export class AppMdcModule { }
