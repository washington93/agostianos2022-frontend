import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { RequestService } from 'src/services/requests/requests.service';

const baseUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private requestService: RequestService) {}

  getUsuarios() {
    return this.requestService.get(`${baseUrl}/usuarios`)
  }
}
