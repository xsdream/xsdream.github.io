// 组件
import { Component } from '@angular/core';/*引入angular component*/  

//要实现js的跳转，需要引入router
//NavigationExtras是为了get传参
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-root', /*表示使用这个组件的名称*/
  templateUrl: './app.component.html', /*html*/
  styleUrls: ['./app.component.css'] /*css*/
})
export class AppComponent { /*数据*/
  title = 'app';

  constructor(private router:Router){

  }

  goNews(){

    //get传值
    let navigationExtras:NavigationExtras={
      queryParams:{'name':'xusheng'}
    }

    // this.router.navigate(['/news']);
    this.router.navigate(['/news'],navigationExtras);
  }
}


