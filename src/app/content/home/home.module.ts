import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { NavbarModule } from 'src/app/shared/navbar/navbar.module';
import { TemporizadorComponent } from './components/temporizador/temporizador.component';


@NgModule({
  declarations: [
    HomeComponent,
    TemporizadorComponent
  ],
  imports: [
    CommonModule,
    NavbarModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
