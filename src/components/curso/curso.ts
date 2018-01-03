import { Component } from '@angular/core';

/**
 * Generated class for the CursoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'curso',
  templateUrl: 'curso.html'
})
export class CursoComponent {

  text: string;

  constructor() {
    console.log('Hello CursoComponent Component');
    this.text = 'Hello World';
  }

}
