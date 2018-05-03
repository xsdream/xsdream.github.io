import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heros:Hero[];

  selectedHero:Hero;

  father:string='父亲的babby';

  onSelect(hero:Hero):void{
    this.selectedHero=hero;
  }

 
  constructor(private HeroService: HeroService) { 
  
  }

   //获得服务中的heroe
   getHeroes(): void {
    this.heros = this.HeroService.getHeroes();
  }

  ngOnInit() {
    //调用这个方法，也可以在构造函数中调用，但是不推荐
    this.getHeroes();
  }

}





