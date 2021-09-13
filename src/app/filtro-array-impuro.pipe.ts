import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArrayImpuro',
  pure: false
})
export class FiltroArrayImpuroPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value.length === 0 || args === undefined) {
      return value;
    }

    const filter = args.map(arg => arg.toLocaleLowerCase());
    return value.filter((v: any) => v.toLocaleLowerCase().indexOf(filter) != -1);
  }
}
