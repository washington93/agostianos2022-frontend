import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { UsuariosService } from 'src/services/usuarios/usuarios.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  mostrarSenha = false;
  olho = faEyeSlash;
  olhoCortado = faEye;

  pop: string | boolean = '';

  loginForm = this.formBuilder.group({
    usuario: [''],
    senha: [''],
  });

  lembreme: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {
    const lembreme = localStorage.getItem('lembreme') || '';

    if(lembreme == "true"){
      this.lembreme = true;
      this.loginForm.patchValue({
        usuario: localStorage.getItem('usuario') || ''
      })
    }
  }

  async login() {
    const { usuario, senha } = this.loginForm.value;
    try {
      const resp:any = await this.usuariosService.login(usuario || '', senha || '');

      if (this.lembreme) {
        localStorage.removeItem('usuario');
        localStorage.removeItem('lembreme');
        localStorage.removeItem('token');
        localStorage.setItem('usuario', usuario + '');
        localStorage.setItem('lembreme', 'true');
        localStorage.setItem('token', resp.token);
      } else {
        localStorage.removeItem('usuario');
        localStorage.removeItem('lembreme');
        sessionStorage.setItem('token', resp.token);
      }

      this.router.navigate(['/dashboard']);
    } catch (e:any) {
      this.pop = e?.error.message;
    }
  }
}
