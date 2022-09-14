import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addLine',
  standalone: true,
})
export class AddLinePipe implements PipeTransform {
  transform(value: string, ...args: string[]): unknown {
    return value.replace(/\./g, '<br /> <br />');
  }
}
