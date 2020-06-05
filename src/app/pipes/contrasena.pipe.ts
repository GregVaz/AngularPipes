import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activo: boolean): unknown {
    if (!activo) {
      return '*'.repeat(value.length);
    }
    return value;
  }

}
