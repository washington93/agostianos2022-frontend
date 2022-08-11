import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  organizadores = [
    {
      nome: 'Elias Junior',
      responsavelPor: 'Organização',
      img: 'assets/imgs/organizadores/junior.jpeg',
    },
    {
      nome: 'Eduarda Limo',
      responsavelPor: 'Local',
      img: 'assets/imgs/avatar.png',
    },
    {
      nome: 'José Gilva',
      responsavelPor: 'Local',
      img: 'assets/imgs/organizadores/gilvan.jpeg',
    },
    {
      nome: 'Larissa Tavares',
      responsavelPor: 'Brincadeiras e Jogos',
      img: 'assets/imgs/organizadores/larissa.jpeg',
    },
    {
      nome: 'Leandro Fortaleza',
      responsavelPor: 'Site',
      img: 'assets/imgs/avatar.png',
    },
    {
      nome: 'Natane Tuany',
      responsavelPor: 'Organização & Ornamentação',
      img: 'assets/imgs/organizadores/natane.jpeg',
    },
    {
      nome: 'Ricardo Barbosa',
      responsavelPor: 'Brincadeiras e Jogos',
      img: 'assets/imgs/avatar.png',
    },
    {
      nome: 'Thiago Costa',
      responsavelPor: 'Organização & Ornamentação',
      img: 'assets/imgs/avatar.png',
    },
    {
      nome: 'Washington da Silva',
      responsavelPor: 'Site',
      img: 'assets/imgs/avatar.png',
    },
  ];
}
