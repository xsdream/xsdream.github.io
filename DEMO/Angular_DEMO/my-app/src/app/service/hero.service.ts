import { Injectable } from '@angular/core';
import { Hero } from '../hero';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of'
import { MessageService }from './message.service'
import { HttpClient} from '@angular/common/http';

@Injectable()
export class HeroService {

  private heroesUrl='api/heroes';

  constructor(
    private messageService:MessageService,
    private Http:HttpClient,
  ) { 
    
  }

  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  //之前获取静态的
  // getHeroes(): Observable<Hero[]> {
  //   this.messageService.add('HeroService: fetched heroes');
  //   return of(HEROES);
  // }

  // 通过HttpClient来获取
  getHeroes () {
    debugger;
    //请求不行
    return this.Http.get('../../assets/HeroData.json').subscribe(
    function(data){
      console.log(data);
    },function(error){
      console.log(error);
    })

    // return this.Http.get<Hero[]>(this.heroesUrl)
  }

  // getHero(id: number): Observable<Hero> {
  //   // Todo: send the message _after_ fetching the hero
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }

}
