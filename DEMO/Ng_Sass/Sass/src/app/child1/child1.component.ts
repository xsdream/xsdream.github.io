import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child11',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.scss']
})
export class Child11Component implements OnInit {
  @Input()
  public title:string="默认的标题";

  @Output()
  btnClick:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }


  public triggerEvent():void{
    this.btnClick.emit("第一个子组件的点击事件...");
  }
}
