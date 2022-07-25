import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarModule } from 'src/app/shared/navbar/navbar.module';
import { DashboardComponent } from './dashboard.component';
import { QrcodeModule } from 'src/app/shared/qrcode/qrcode.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, DashboardRoutingModule, QrcodeModule, NavbarModule],
})
export class DashboardModule {}
