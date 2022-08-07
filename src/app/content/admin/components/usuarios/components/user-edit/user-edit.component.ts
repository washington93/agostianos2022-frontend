import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';

import { AdminService } from 'src/services/admin/admin.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  value: boolean = false;

  @Input() usuarioSelecionado?: IUsuario;
  @Output() limparUsuario = new EventEmitter<null>();
  @Input() mudancaUsuario: Subject<IUsuario | null | undefined> = new Subject<
    IUsuario | null | undefined
  >();

  icFechar = faTimes;
  ativar: boolean = false;
  admin: boolean = false;

  constructor(private adminService: AdminService) {}

  ngOnInit() {
    this.mudancaUsuario.subscribe((usuario) => {
      if(usuario){
        this.ativar = usuario.ativo;
        this.admin = usuario.admin;
      }
    });
  }

  limpar() {
    this.limparUsuario.emit(null);
  }

  salvar() {
    if (this.usuarioSelecionado) {
      this.usuarioSelecionado.ativo = this.ativar;
      this.usuarioSelecionado.admin = this.admin;

      this.adminService.ativarDesativarUsuarios(
        this.usuarioSelecionado.id,
        this.usuarioSelecionado.ativo
      );

      this.adminService.modoAdminUsuario(
        this.usuarioSelecionado.id,
        this.usuarioSelecionado.admin
      );
    }

    this.limparUsuario.emit(null);
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
