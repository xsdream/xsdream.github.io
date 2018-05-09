import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent }      from './heroes/heroes.component';
import { MessagesComponent }      from './messages/messages.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }   from './hero-detail/hero-detail.component';


const routes: Routes = [
  //根目录会重定向到/dashboard
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'message', component: MessagesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})


export class AppRoutingModule {
 
}