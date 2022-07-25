import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

import {NavbarModule} from 'src/app/shared/navbar/navbar.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    NavbarModule,
    FontAwesomeModule,
    SignupRoutingModule,
    ReactiveFormsModule
  ]
})
export class SignupModule { }
