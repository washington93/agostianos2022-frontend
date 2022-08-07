import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

import { UsuariosService } from 'src/services/usuarios/usuarios.service';

const helper = new JwtHelperService();

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  opcaoAtiva: number | string = 2;

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

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this.init();
  }

  async init() {
    const dados = await this.usuariosService.dados();
    if (dados) {
      this.dadosUsuario = dados;
      console.log(this.dadosUsuario);
    }
  }
}
