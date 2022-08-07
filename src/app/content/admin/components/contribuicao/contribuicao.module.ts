import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContribuicaoComponent } from './contribuicao.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, FormsModule, NgbModule],
  declarations: [ContribuicaoComponent],
  exports: [ContribuicaoComponent],
  bootstrap: [],
})
export class ContribuicaoModule {}
