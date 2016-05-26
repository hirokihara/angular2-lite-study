import {Component} from '@angular/core'
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

declare var MilkCocoa: any;

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.id }} - {{ hero.name }}
      </li>
    </ul>
    {{errorMessage}}
    `
})

export class AppComponent {
  private heroesUrl = "http://hirokihara.github.io/testdata/heroes.json";
  private heroes = [];
  private errorMessage: string;
  
  // private milkcocoa = new MilkCocoa('postimpxymwi.mlkcca.com');
  
  constructor(private http: Http) {
    // this.http.get(this.heroesUrl)
    //   .map(this.extractData)
    //   .catch(this.handleError)
    //   .subscribe(
    //     heroes => this.heroes = heroes,
    //     error =>  this.errorMessage = <any>error
    //   );
      
    this.http.get(this.heroesUrl)
      .subscribe(
        result => this.heroes = result.json().data
      );  
      
      var milkcocoa = new MilkCocoa('postimpxymwi.mlkcca.com');
      var ds = milkcocoa.dataStore('messages');
      ds.push({title : 'hoge', content : 'huga'});
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  
  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
　