import { Component } from '@angular/core';  /*引入 angular Component */

@Component({
  selector: 'app-root',   /*表示使用这个组件的名称*/
  templateUrl: './app.component.html',  /*html*/
  styleUrls: ['./app.component.css']   /*css*/
})
export class AppComponent {  /*数据*/
  title = 'app';

  h='你好 angualr4.x'
}
