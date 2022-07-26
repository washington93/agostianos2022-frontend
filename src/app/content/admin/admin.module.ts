import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';

import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [AdminComponent, UsersComponent],
  imports: [CommonModule, AdminRoutingModule, NavbarModule],
})
export class AdminModule {}
