import { Pipe, PipeTransform } from '@angular/core';

/**
 * O objetivo deste pipe é tornar a primeira letra de cada palavra de uma frase maiúscula.
 */
@Pipe({   // Este é o decorator que declara um pipe
  name: 'camelCase'
})
// Todo pipe deve implementar a interface PipeTransform para que seja considerado uma classe
//pelo framework que pode ser usado como um pipe.
export class CamelCasePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let result = '';
    for (let v of value.split(' ')) {
      result += this.capitalize(v) + ' ';
    }
    return result.trim();
  }

  private capitalize(value: string): string {
    return `${value.substr(0, 1).toUpperCase()}${value.substr(1).toLowerCase()}`;
  }
}
