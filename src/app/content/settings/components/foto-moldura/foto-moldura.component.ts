import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-foto-moldura',
  templateUrl: './foto-moldura.component.html',
  styleUrls: ['./foto-moldura.component.css'],
})
export class FotoMolduraComponent implements OnInit {
  @Input() dadosUsuario = {
    primeiroNome: '',
  };

  constructor() {}

  ngOnInit() {}
}
