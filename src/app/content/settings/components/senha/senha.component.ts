import { Component, OnInit } from '@angular/core';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-senha',
  templateUrl: './senha.component.html',
  styleUrls: ['./senha.component.css']
})
export class SenhaComponent implements OnInit {

  mostrarSenha = false;
  mostrarReSenha = false;
  olho = faEyeSlash;
  olhoCortado = faEye;

  constructor() { }

  ngOnInit() {
  }

}
