import { Component, OnInit } from '@angular/core';

import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contribuicao',
  templateUrl: './contribuicao.component.html',
  styleUrls: ['./contribuicao.component.scss'],
})
export class ContribuicaoComponent implements OnInit {
  faPlusCircle = faPlusCircle;

  valor: number = 50;

  modalContribuicoesUsuario: boolean = false;
  modalNovaContribuicao: boolean = false;

  constructor() {}

  ngOnInit() {}

  contribuintes: any[] = [
    {
      nome: 'João',
      contribuicao: 'R$ 50,00',
    },
    {
      nome: 'Maria',
      contribuicao: 'R$ 100,00',
    },
    {
      nome: 'Pedro',
      contribuicao: 'R$ 150,00',
    },
    {
      nome: 'José',
      contribuicao: 'R$ 200,00',
    },
    {
      nome: '',
      contribuicao: 'R$ 500,00',
    },
  ];
}
