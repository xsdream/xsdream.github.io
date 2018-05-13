// ng new 项目名称  --routing  

//路由配置文件

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//引入组件

import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { News2Component } from './components/news2/news2.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { NewsContentComponent } from './components/news-content/news-content.component';

//配置路由
const routes: Routes = [
  {
    path: 'home',
    component:HomeComponent
  },
   {
    path: 'news',
    component:NewsComponent,
    //父子路由(子组件)
    children:[
      {
        path:'news2',
        component:TodolistComponent
      }
    ]
  },
  {
   path: 'newsContent/:id',//配置动态路由
   component:NewsContentComponent
 },
  {
   path: 'todo',
   component:TodolistComponent
  }
  ,{   /*匹配不到路由的时候加载的组件*/
    path: '**',  /*任意的路由*/
    // component:HomeComponent
    redirectTo:'home'
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
