import {Component} from '@angular/core';

import {AppState} from '../app.service';


@Component({
  selector: 'home',
  styles: [require('./home.css')],
  template: require('./home.html')
})
export class Home {
  constructor() {
    console.log('home');
  }
}
