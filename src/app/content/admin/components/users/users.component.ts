import { Component, OnInit } from '@angular/core';

import { AdminService } from 'src/services/admin/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  usuarios: IUsuario[] = [];
  erroAoCarregarUsuarios: boolean = false;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.init();
  }

  async init() {
    try {
      const usuarios: any = await this.adminService.getUsuarios();
      this.usuarios = usuarios;
      console.log(usuarios);
    } catch (error) {
      this.erroAoCarregarUsuarios = true;
    }
  }
}

interface IUsuario {
  admin: boolean;
  avatar: string;
  email: string;
  id: number;
  ativo: boolean;
  moldura: null;
  nome: string;
  pontuacao: null;
  primeiroNome: string;
  sobre: string;
  telefone: string;
}
