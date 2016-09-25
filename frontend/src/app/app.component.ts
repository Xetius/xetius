/*
 * Angular 2 decorators and services
 */
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styleUrls: [
    './app.style.css'
  ],
  template: `
    <h1>Something</h1>
  `
})
export class App {
  angularclassLogo = 'assets/img/app-logo.png';
  name = 'Xetius.com';
  url = 'https://xetius.com/';
}
