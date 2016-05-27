import { Hero } from '../models/hero';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

// Operators
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {
  private heroesUrl: string;
  
  constructor(private _http: Http) {
    this.heroesUrl = "http://hirokihara.github.io/testdata/heroes.json";
  }
  
  loadAll() {
    return this._http.get(this.heroesUrl).map((res: Response) => res.json());
  }
}
