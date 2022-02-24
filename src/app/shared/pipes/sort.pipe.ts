import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Array<any>): Array<any> {
    if (!Array.isArray(value)) {
      return [];
    }
    return value.sort((a, b) => Date.parse(a.date) > Date.parse(b.date) ? -1 : 1);
  }

}
