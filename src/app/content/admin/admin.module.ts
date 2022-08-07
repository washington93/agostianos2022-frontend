import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UsuariosModule } from './components/usuarios/usuarios.module';
import { AdminComponent } from './admin.component';
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';

import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AdminComponent, FooterMenuComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UsuariosModule,
    NavbarModule,
    FormsModule,
    FontAwesomeModule,
    NgbCollapseModule,
  ],
})
export class AdminModule {}
