import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../Hero'

import { ActivatedRoute } from '@angular/router';
import { Location} from '@angular/common';

import { HeroService }  from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {

  @Input() hero:Hero;

  @Input() babby:String;

  constructor(private route:ActivatedRoute,private HeroService:HeroService,private location:Location) {
    
  }

  // getHero(): void {
  //    //取得路由中的id，+字符会将这个字符串转为int
  //   const id = +this.route.snapshot.paramMap.get('id');
  //   this.HeroService.getHero(id)
  //     .subscribe(hero => this.hero = hero);
  // }

  goBack():void{
    //调用浏览器
    this.location.back();
  }

  ngOnInit() {
    // this.getHero();
    //提取路由中的id
    
  }

}
