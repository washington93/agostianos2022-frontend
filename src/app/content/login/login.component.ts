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
      await this.usuariosService.login(usuario || '', senha || '');
      if (this.lembreme) {
        localStorage.setItem('usuario', usuario + '');
        localStorage.setItem('lembreme', 'true');
      } else {
        localStorage.removeItem('usuario');
        localStorage.removeItem('lembreme');
      }
      this.router.navigate(['/dashboard']);
    } catch (error) {
      this.pop = 'Usuário ou senha inválidos';
    }
  }
}
