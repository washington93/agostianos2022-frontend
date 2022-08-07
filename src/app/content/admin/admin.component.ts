import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AdminComponent implements OnInit {
  opcaoSelecionada?: string = OpcaoMenu.usuarios;

  constructor() {}

  ngOnInit(): void {}

  selecionarItemDoMenu(item: any) {
    this.opcaoSelecionada = item;
  }
}

enum OpcaoMenu {
  usuarios = 'usuarios',
  jogos = 'jogos',
  pontuacao = 'pontuacao',
  grupos = 'grupos',
  contribuicao = 'contribuicao'
}
