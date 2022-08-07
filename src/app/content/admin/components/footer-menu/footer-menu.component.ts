import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import {
  faUsers,
  faDollar,
  faDice,
  faShield,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer-menu',
  templateUrl: './footer-menu.component.html',
  styleUrls: ['./footer-menu.component.scss'],
})
export class FooterMenuComponent implements OnInit {
  @Input() opcaoSelecionada_: any;
  @Output() selecionarItemDoMenu = new EventEmitter<string>();

  faUsers = faUsers;
  faDollar = faDollar;
  faDice = faDice;
  faShield = faShield;
  faStar = faStar;

  constructor() {}

  ngOnInit() {}

  selecionarItem(opcao: string) {
    this.selecionarItemDoMenu.emit(opcao);
  }
}
