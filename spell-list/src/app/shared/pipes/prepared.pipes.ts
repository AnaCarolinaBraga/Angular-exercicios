import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prepared',
})
export class PreparedPipes implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Magic redy to use' : 'Magic is not read to use';
  }
}