import { Component, OnInit, ViewChild } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { UsuariosService } from 'src/services/usuarios/usuarios.service';

import { FotoMolduraComponent } from './components/foto-moldura/foto-moldura.component';
import { DadosPessoaisComponent } from './components/dados-pessoais/dados-pessoais.component';
import { SenhaComponent } from './components/senha/senha.component';

const helper = new JwtHelperService();

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  opcaoAtiva: number | string = 2;
  versaoWeb: boolean;

  @ViewChild('fotoMolduraComponent', { static: false })
  fotoMolduraComponent?: FotoMolduraComponent;
  @ViewChild('dadosPessoaisComponent', { static: false })
  dadosPessoaisComponent?: DadosPessoaisComponent;
  @ViewChild('senhaComponent', { static: false })
  senhaComponent?: SenhaComponent;
  @ViewChild('fotoMolduraComponentMobile', { static: false })
  fotoMolduraComponentMobile?: FotoMolduraComponent;
  @ViewChild('dadosPessoaisComponentMobile', { static: false })
  dadosPessoaisComponentMobile?: DadosPessoaisComponent;
  @ViewChild('senhaComponentMobile', { static: false })
  senhaComponentMobile?: SenhaComponent;

  dadosUsuario: any = {
    id: null,
    nome: null,
    primeiroNome: null,
    admin: null,
    ativo: null,
    email: null,
    telefone: null,
    sobre: null,
    avatar: null,
    moldura: null,
    pontuacao: null,
    created_at: null,
    updated_at: null,
  };

  constructor(private usuariosService: UsuariosService) {
    this.versaoWeb = window.innerWidth > 768;
  }

  ngOnInit(): void {
    this.init();
  }

  async init() {
    const dados = await this.usuariosService.dados();
    if (dados) {
      this.dadosUsuario = dados;
    }
  }

  async atualizarDados() {
    if (this.versaoWeb) {
      switch (this.opcaoAtiva) {
        case 1:
          this.fotoMolduraComponent?.atualizar();
          break;
        case 2:
          this.dadosPessoaisComponent?.atualizar();
          break;
        case 3:
          this.senhaComponent?.atualizar();
          break;
      }
    } else {
      this.fotoMolduraComponentMobile?.atualizar();
      this.dadosPessoaisComponentMobile?.atualizar();
      this.senhaComponentMobile?.atualizar();
    }
  }
}
