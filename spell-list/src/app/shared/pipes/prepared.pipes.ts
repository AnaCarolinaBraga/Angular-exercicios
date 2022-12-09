import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prepared',
})
export class PreparedPipes implements PipeTransform {
  transform(value: boolean): string {
    return value ? 'Spell redy to use' : 'Spell is not read to use';
  }
}