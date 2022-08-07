import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SettingsComponent } from './settings.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { NavbarModule } from 'src/app/shared/navbar/navbar.module';

import { FotoMolduraComponent } from './components/foto-moldura/foto-moldura.component';
import { DadosPessoaisComponent } from './components/dados-pessoais/dados-pessoais.component';
import { SenhaComponent } from './components/senha/senha.component';

@NgModule({
  declarations: [
    SettingsComponent,
    FotoMolduraComponent,
    DadosPessoaisComponent,
    SenhaComponent,
  ],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    NavbarModule,
    FormsModule,
    FontAwesomeModule,
  ],
})
export class SettingsModule {}
