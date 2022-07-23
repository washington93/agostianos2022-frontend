import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ZXingScannerModule } from '@zxing/ngx-scanner';

import { QrcodeComponent } from './qrcode.component';

@NgModule({
  imports: [
    CommonModule,
    ZXingScannerModule
  ],
  declarations: [QrcodeComponent],
  exports: [QrcodeComponent]
})
export class QrcodeModule { }
