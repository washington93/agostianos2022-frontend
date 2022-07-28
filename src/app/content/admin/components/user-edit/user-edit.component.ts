import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { AdminService } from 'src/services/admin/admin.service';
import { AdminComponent } from 'src/app/content/admin/admin.component';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
})
export class UserEditComponent implements OnInit {
  icFechar = faTimes;
  ativar: boolean = false;
  admin: boolean = false;

  @Input() usuarioSelecionado?: IUsuario;
  @Output() limparUsuario = new EventEmitter<null>();

  constructor(private adminService: AdminService) {}

  ngOnInit() {}

  limpar() {
    this.limparUsuario.emit(null);
  }

  salvar() {
    if (this.usuarioSelecionado) {
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
