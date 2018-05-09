import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
//guo ji hua
import { NZ_LOCALE, enUS } from 'ng-zorro-antd';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './service/hero.service';
import { MessagesComponent } from './messages/messages.component';
//--modal=app zhi jie huo de  fuwu
import { MessageService } from './service/message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
//只是为了配合httpclient
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { HttpClientModule } from '@angular/common/http';

import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  //zu jian  bixu  zai  zhe li  sheng ming
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
    InMemoryDataService, { 
        dataEncapsulation: false 
      }
    ),
    HttpModule,
    JsonpModule
  ],
  bootstrap: [AppComponent],
  providers   : [ 
     HeroService,
     MessageService
  ],
})


export class AppModule { 
  
}
