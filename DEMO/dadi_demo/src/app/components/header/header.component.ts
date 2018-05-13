import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()msg:string;

  @Input()sayHello:any;

  title:string='我是你爸爸'

  //EventEmitter
  @Output() toparent=new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.title='我是你妈妈'
  }

  requestJson(){
    //调用父组件的方法请求数据
    this.toparent.emit('这是子组件的值');
  }


}
