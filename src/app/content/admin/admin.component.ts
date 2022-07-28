import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AdminComponent implements OnInit {

  expandirUsuarios = true;

  usuarioSelecionado?: any;
  mudancaNoUsuario: Subject<IUsuario | null | undefined> = new Subject();

  constructor() {}

  ngOnInit(): void {}

  selecionarUsuario(usuario?: IUsuario | null) {
    this.usuarioSelecionado = usuario;
    this.mudancaNoUsuario.next(usuario);
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
