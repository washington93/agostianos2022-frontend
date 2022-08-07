import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { faCrown, faParking, faCircle } from '@fortawesome/free-solid-svg-icons';

import { AdminService } from 'src/services/admin/admin.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  @Output() escolherUsuario = new EventEmitter<IUsuario>();

  usuarios: IUsuario[] = [];
  erroAoCarregarUsuarios: boolean = false;

  faCrown = faCrown;
  faParking = faParking;
  faCircle = faCircle;

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

  selecionar(usuario?: IUsuario) {
    this.escolherUsuario.emit(usuario);
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
