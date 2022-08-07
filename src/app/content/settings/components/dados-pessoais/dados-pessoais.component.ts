import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.scss'],
})
export class DadosPessoaisComponent implements OnInit {
  @Input() dadosUsuario = {
    nome: '',
    telefone: '',
    email: '',
    sobre: '',
  };

  constructor() {}

  ngOnInit() {}

  atualizar() {
    console.log("Atualizar dados pessoais");
  }
}
