import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Guard, Route, TraversalCandidate, LocationChange } from '@ngrx/router';

@Injectable()
export class AuthGuard implements Guard {
  constructor(private _http: Http) { }

  protectRoute(candidate: TraversalCandidate) {
    // `route` is the current route being evaluated
    const route: Route = candidate.route;

    // `locationChange` includes the full path and type of change that caused traversal
    const locationChange: LocationChange = candidate.locationChange;

    // `queryParams` are the parsed query parameters
    const queryParams: any = candidate.queryParams;

    // `routeParams` is a snapshot of the route parameters discovered so far
    const routeParams: any = candidate.routeParams;

    // `isTerminal` indicates that the candidate route is going to be the last route traversed
    const isTerminal: boolean = candidate.isTerminal;

    return this._http.get('/assets/check.json')
      // If request succeeds, return true
      .map(() => true)
      // If request fails, return false
      .catch(() => Observable.of(false));
  }
}
