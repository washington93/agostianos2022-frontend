import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

import { UsuariosService } from 'src/services/usuarios/usuarios.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  mostrarSenha = false;
  olho = faEyeSlash;
  olhoCortado = faEye;
  sucesso: boolean = false;

  pop: string | boolean = '';

  cadastroForm = this.formBuilder.group({
    nome: [''],
    usuario: [''],
    senha: [''],
  });

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {}

  async cadastrar() {
    this.pop = '';
    try{
      const { nome, usuario, senha } = this.cadastroForm.value;
      await this.usuariosService.cadastro({
        nome: nome + '',
        email: usuario + '',
        senha: senha + '',
      });
      this.sucesso = true;
    }catch(e:any){
      this.pop = e?.error.message;
    }
  }

  async voltar() {
    await this.router.navigate(['/']);
  }
}
