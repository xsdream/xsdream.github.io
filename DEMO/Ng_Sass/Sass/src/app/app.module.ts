import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Child11Component } from './child1/child1.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    Child11Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[Child11Component]
})
export class AppModule { }
