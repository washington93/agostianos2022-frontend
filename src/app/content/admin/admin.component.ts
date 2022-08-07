import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AdminComponent implements OnInit {
  opcaoSelecionada?: string = 'jogos';

  constructor() {}

  ngOnInit(): void {}

  selecionarItemDoMenu(item: any) {
    this.opcaoSelecionada = item;
  }
}
