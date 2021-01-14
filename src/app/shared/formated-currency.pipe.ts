import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatedCurrency'
})
export class FormatedCurrencyPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    let strVal = String(value);
    strVal = strVal.replace(/,/g , "");
    let size = strVal.length;
    if(size > 3) {
      let strValArr = strVal.split("");
      strValArr.splice(size-3,0,",");
      strValArr.reverse();
      let i = 4;
      size++;
      while(true) {
        if(i+2 >= size) {
          break;
        } else {
          strValArr.splice(i+2,0,',');
          i+=3;
          size++;
        }
      }
      strVal = strValArr.reverse().join("");
      return strVal;
    }

    return strVal;

  }

}
