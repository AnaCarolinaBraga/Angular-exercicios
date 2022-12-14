import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cantrip',
})
export class CantripPipes implements PipeTransform {
  transform(value: number): string {
    return value == 0 ? 'cantrip' : `${value}`;
  }
}