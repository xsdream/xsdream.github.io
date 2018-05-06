import { Component, OnInit } from '@angular/core';
import { Hero } from '../Hero';
import { HeroService } from '../service/hero.service';

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
<<<<<<< HEAD
  getHeroes(): void {
  this.HeroService.getHeroes()
      .subscribe(heroes => this.heros = heroes);
}

  ngOnInit() {
=======
   getHeroes(): void {
    this.HeroService.getHeroes().subscribe(
      heros=>this.heros=heros
    )
  }
  
   ngOnInit() {
>>>>>>> 4c50a5443f265fdd93450292dc789b0e47e47726
    //调用这个方法，也可以在构造函数中调用，但是不推荐
    this.getHeroes();
  }

}





