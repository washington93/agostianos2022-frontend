import { Component, OnInit } from '@angular/core';
import {
  faPlusCircle,
  faCommentDollar,
} from '@fortawesome/free-solid-svg-icons';

import { AdminService } from 'src/services/admin/admin.service';

@Component({
  selector: 'app-contribuicao',
  templateUrl: './contribuicao.component.html',
  styleUrls: ['./contribuicao.component.scss'],
})
export class ContribuicaoComponent implements OnInit {
  faClipboardList = faCommentDollar;
  faPlusCircle = faPlusCircle;

  valor: number = 50;
  contribuintes: any = [];
  contribuicoesParaDeletar: any = [];
  modalContribuicoesUsuario: boolean = false;
  modalNovaContribuicao: boolean = false;

  itemSelecionado?: any = null;

  constructor(private adminService: AdminService) {
    this.init();
  }

  ngOnInit() {}

  async init() {
    this.contribuintes = [];
    this.contribuintes = await this.adminService.getUsuarios();

    this.contribuintes.forEach((contribuinte: any) => {
      contribuinte?.contribuicoes.forEach((contribuicao: any) => {
        contribuicao.responsavel = this.contribuintes.find(
          (usuario: any) => usuario.id === contribuicao.responsavel
        );
      });
    });
    this.modalContribuicoesUsuario = false;
    this.modalNovaContribuicao = false;
    this.contribuicoesParaDeletar = [];
  }

  async registrar() {
    await this.adminService.registrarContribuicao(
      this.itemSelecionado?.id,
      this.valor
    );
    this.init();
  }

  editarContribuicoes() {
    this.contribuicoesParaDeletar = [];
    this.modalContribuicoesUsuario = true;
  }

  deletar(item: any) {
    item.deletar = item.deletar ? false : true;
    if (item.deletar) {
      this.contribuicoesParaDeletar.push(item);
    }
  }

  async deletarContribuicoes() {
    await this.adminService.deletarContribuicoes(this.contribuicoesParaDeletar);
    await new Promise((resolve) => setTimeout(resolve, 200));
    this.init();
  }
}
