import { Injectable, Pipe } from '@angular/core';

/*
  Generated class for the Substring pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'SubstringName'
})
@Injectable()
export class Substring {
  /*
    Takes a value and makes it lowercase.
   */
  transform(value: string) {
    value = value.charAt(0);
    return value;
  }
}
