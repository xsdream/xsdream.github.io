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

  father:string='父亲的babby';

  constructor(private HeroService: HeroService) { 
  
  }

   //获得服务中的heroe
  // getHeroes(): void {
  // this.HeroService.getHeroes()
  //     .subscribe(heroes => this.heros = heroes);
  // }

  ngOnInit() {
    //调用这个方法，也可以在构造函数中调用，但是不推荐
    // this.getHeroes();
  }

}





