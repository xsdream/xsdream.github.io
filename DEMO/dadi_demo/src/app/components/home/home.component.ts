import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public msg:string;
  public bool:boolean;
  public search:any;

  constructor() { 
    this.msg='这是一个新闻组件';
    this.bool=true;
  }

  ngOnInit() {
  }

  getMsg(){ /*自定义方法*/
    //获取属性的值

    alert(this.msg);

  }

  setMsg(){
    this.msg='我变了变了，变的可爱了！'
  }

  keyup(e){
    if(e.key==' ')
      console.log('不要按回车！')
  }

  

}
