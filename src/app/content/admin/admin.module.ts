import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';
import { UsersComponent } from './components/users/users.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';

import { NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AdminComponent, UsersComponent, UserEditComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    NavbarModule,
    FormsModule,
    FontAwesomeModule,
    NgbCollapseModule
  ]
})
export class AdminModule {}
