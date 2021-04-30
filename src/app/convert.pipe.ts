import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any,
            targetUnits: string): any{
    // Initial code
    // transform(value: unknown, ...args: unknown[]): unknown {
    // if no value is entered
    if (!value) {
      return'';
    }
    // console.log(value);
    // console.log(m);
    // console.log(targetUnits);
    switch (targetUnits) {
      case 'km':
        return value * 1.60934;
      case 'm':
        return value * 1.60934 * 1000;
      case 'cm':
        return value * 1.60934 * 1000 * 1000;
      default:
        return new Error ('Target unit not supported');
    }
    // return ( value * 1.60934 );
  }
}


// args -  it essentially means take whatever other arguments were provided