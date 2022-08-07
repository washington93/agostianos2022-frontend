import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UsersComponent } from './components/users/users.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UsuariosComponent } from './usuarios.component';

@NgModule({
  declarations: [UsuariosComponent, UsersComponent, UserEditComponent],
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  exports: [UsuariosComponent],
})
export class UsuariosModule {}
