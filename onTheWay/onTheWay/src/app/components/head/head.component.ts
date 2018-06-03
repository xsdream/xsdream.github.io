import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent implements OnInit {

  private stars:boolean[];

  constructor() { }

  ngOnInit() {
   this.stars=[true,false,true,true,true];
  }

}
