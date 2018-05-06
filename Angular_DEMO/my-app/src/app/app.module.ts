import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

@NgModule({
  //zu jian  bixu  zai  zhe li  sheng ming
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgZorroAntdModule.forRoot(),
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers   : [ 
    HeroService, MessageService
  ],
})


export class AppModule { 
  
}
