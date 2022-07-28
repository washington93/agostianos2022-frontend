import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { RequestService } from 'src/services/requests/requests.service';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor(private requestService: RequestService) {}

  getUsuarios() {
    return this.requestService.get(`${baseUrl}/usuarios`);
  }

  ativarDesativarUsuarios(usuario_id: string | number, ativo: boolean) {
    return this.requestService.post(`${baseUrl}/usuarios/ativar_desativar`, {
      usuario_id,
      ativo,
    });
  }

  modoAdminUsuario(usuario_id: string | number, admin: boolean) {
    return this.requestService.post(`${baseUrl}/usuarios/modo_admin`, {
      usuario_id,
      admin,
    });
  }
}
