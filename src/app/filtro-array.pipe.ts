import { Pipe, PipeTransform } from '@angular/core';

/**
 * Implementação de Pipe Puro.
 * Esta implementação de pipe é considerada uma implementação de Pipe Puro, pois
 * ele não considera novas alterações no valor que foi recebido como primeiro
 * parâmetro do método transform. O pipe pode receber valores primitivos, ou básicos da linguagem
 * JavaScript como também valores que são mais complexos, como objetos e arrays.
 */
@Pipe({
  name: 'filtroArrayPuro',
  pure: true
})
export class FiltroArrayPuroPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value.length === 0 || args === undefined) {
      return value;
    }

    let filter = args.map(arg => arg.toLocaleLowerCase());
    return value.filter((v: any) => v.toLocaleLowerCase().indexOf(filter) != -1);
  }
}
