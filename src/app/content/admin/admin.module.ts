import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';

import { NavbarModule } from 'src/app/shared/navbar/navbar.module';
import { UsuariosModule } from './components/usuarios/usuarios.module';
import { AdminComponent } from './admin.component';
import { FooterMenuComponent } from './components/footer-menu/footer-menu.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ContribuicaoModule } from './components/contribuicao/contribuicao.module';
import { JogosModule } from './components/jogos/jogos.module';
import { GruposModule } from './components/grupos/grupos.module';
import { PontuacaoModule } from './components/pontuacao/pontuacao.module';

@NgModule({
  declarations: [AdminComponent, FooterMenuComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UsuariosModule,
    ContribuicaoModule,
    JogosModule,
    GruposModule,
    PontuacaoModule,
    NavbarModule,
    FormsModule,
    FontAwesomeModule,
    NgbCollapseModule,
  ],
})
export class AdminModule {}
