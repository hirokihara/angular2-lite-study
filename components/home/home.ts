import { Hero } from '../../models/hero';
import { Component, OnInit } from '@angular/core'
import { Http, Response } from '@angular/http';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'my-app',
  providers: [HeroService],
  template: `
    <ul>
      <li *ngFor="let hero of heroes">
        {{ hero.id }} - {{ hero.name }}
      </li>
    </ul>
    hogehoge
    `
})

export class AppComponent implements OnInit {
  heroes: Hero[];
  
  constructor(private _heroService: HeroService) {
  }
  
  ngOnInit() {
    this._heroService.loadAll().subscribe(result => {
      this.heroes = result.data;
    });;
  }
}
　