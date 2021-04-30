import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    // if no value is entered
    if (!value) {
      return'';
    }
    console.log(value);
    return (value * 1.60934);
  }

}
