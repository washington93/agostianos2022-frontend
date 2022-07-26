import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';

import { AdminComponent } from 'src/app/content/admin/admin.component';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {

  @Input() usuarioSelecionado?: IUsuario;
  @Output() limparUsuario = new EventEmitter<null>();

  constructor() {}

  ngOnInit() {}

  limpar(){
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
