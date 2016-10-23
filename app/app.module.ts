import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {AUTH_PROVIDERS} from 'angular2-jwt';

import {HomeComponent} from './components/home/home.component';
import {PerfilComponent} from './components/perfil/perfil.component';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent,HomeComponent,PerfilComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
