import { Component, OnInit } from '@angular/core';
//import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  //heroes= HEROES;
  //selectedHero:Hero;
  Heroes:Hero[];

  onSelect(hero:Hero):void{
    //this.selectedHero=hero;
  }

  constructor(private heroService:HeroService) {
    
 }

  ngOnInit() {
  }

}
