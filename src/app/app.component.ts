import {Component, ViewEncapsulation} from '@angular/core';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  encapsulation: ViewEncapsulation.None,
  styles: [
    require('normalize.css')
  ],
  template: `
    <route-view></route-view>
  `
})
export class App {
}
