import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { RequestService } from 'src/services/requests/requests.service';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  constructor(private requestService: RequestService) {}

  login(usuario: string, senha: string) {
    return this.requestService.post(`${baseUrl}/autenticacao`, {
      email: usuario,
      senha,
    });
  }

  cadastro(data: ICadastro) {
    return this.requestService.post(`${baseUrl}/usuarios`, data);
  }

  dados() {
    return this.requestService.get(`${baseUrl}/usuarios/dados`);
  }
}

interface ICadastro {
  nome: string;
  email: string;
  senha: string;
}
