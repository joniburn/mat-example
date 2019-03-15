/*
 * Angular MDCのコンポーネントをインポートするモジュール。
 */

import { NgModule } from '@angular/core';

// 使いたいAngular MDCのモジュールを列挙する。
// 名前順でソートすること
import {
  MdcButtonModule,
  MdcTextFieldModule,
} from '@angular-mdc/web';

// 上のimportを名前順でソートしてからコピペ
const MDC_MODULES = [
  MdcButtonModule,
  MdcTextFieldModule,
];

@NgModule({
  imports: MDC_MODULES,
  exports: MDC_MODULES,
})
export class AppMdcModule { }
