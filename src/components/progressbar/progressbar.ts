import { Component, Input } from '@angular/core';

/*
  Generated class for the Progressbar component.

  See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
  for more info on Angular 2 Components.
*/
@Component({
  selector: 'progressbar',
  templateUrl: 'progressbar.html'
})
export class ProgressbarComponent {

  text: string;
  @Input('for') like; 
  @Input ('against') dislike; 

  constructor() {
    console.log('Hello Progressbar Component');
    this.text = 'Hello World';
  }

}
