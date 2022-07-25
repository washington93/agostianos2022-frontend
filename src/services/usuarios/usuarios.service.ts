import { RequestService } from './../requests/requests.service';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private requestService: RequestService) {}

  login(usuario: string, senha: string) {
    return this.requestService.post(`${baseUrl}/autenticacao`, {
      email:usuario,
      senha,
    });
  }
}
