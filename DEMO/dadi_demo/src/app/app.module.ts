
import { BrowserModule } from '@angular/platform-browser';  

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpModule,JsonpModule } from '@angular/http';

import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { TodolistComponent } from './components/todolist/todolist.component'; 
import { AppComponent } from './app.component';
import { News2Component } from './components/news2/news2.component';

import { StorageService } from './services/storage.service'; 

import { NgZorroAntdModule } from 'ng-zorro-antd';


//注入路由
import { AppRoutingModule } from './app-routing.module'
import { NewsContentComponent } from './components/news-content/news-content.component';



 @NgModule({
  declarations: [ 
    AppComponent,
    HeaderComponent,
    NewsComponent,
    News2Component,
    HomeComponent,
    TodolistComponent,
    NewsContentComponent
  ],
  imports: [  
    //依赖注入 
    NgZorroAntdModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule
  ],
  providers: [
    StorageService
  ], 
  bootstrap: [AppComponent] 
})

export class AppModule { }
