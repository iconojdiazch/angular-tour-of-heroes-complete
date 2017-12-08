import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Hero } from './hero';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class HeroSearchService {
  private headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + this.authenticationService.getToken()
  });

  constructor(private http: Http, private authenticationService: AuthenticationService) { }

  search(term: string): Observable<Hero[]> {
    return this.http
      .get(`http://localhost:8080/heroes/search/findByName?name=${term}`, { headers: this.headers })
      .map((r: Response) => r.json()._embedded.heroes as Hero[]);
  }
}
