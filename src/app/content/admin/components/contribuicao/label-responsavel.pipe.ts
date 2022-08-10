import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'labelResponsavel',
})
export class LabelResponsavelPipe implements PipeTransform {
  transform(responsavelId: any, usuarios: any[]): any {

    if (usuarios) {
      const usuario = usuarios.find((usuario: any) => {
        return usuario.id == responsavelId;
      });

      return usuario?.primeiroNome;
    }

    return null;
  }
}
