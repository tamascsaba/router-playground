import {Routes} from '@ngrx/router';

import {Home} from '../_home';
import {About} from '../_about';
import {Denied} from '../_denied';

import {AuthGuard} from './auth-guard';

export const routes: Routes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/denied', component: Denied, guards: [AuthGuard]},
  {path: '/same-denied', component: Denied, guards: [AuthGuard]}
];
