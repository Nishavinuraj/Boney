import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipePipe implements PipeTransform {

  transform(input: any, args?: any): any {
    // let exp, rounded,
    //   suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];

    if (Number.isNaN(input)) {
      return null;
    }

    if (input < 1000) {
      return input;
    }

    return input;

    // exp = Math.floor(Math.log(input) / Math.log(1000));

    // return (input / Math.pow(1000, exp)).toFixed(args) + suffixes[exp - 1];

  }

}
