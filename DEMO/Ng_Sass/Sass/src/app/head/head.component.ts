import { Component, OnInit,ViewChild,ViewContainerRef,ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { Child11Component } from '../child1/child1.component';
import { state } from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
  template: `
      <h1>Alert {{type}}</h1>
    `,
})
export class HeadComponent implements OnInit {


 ngOnInit() {
   $('#btn').addClass('btn btn-default btn-info');
 }

}


