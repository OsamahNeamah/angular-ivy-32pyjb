import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {SubPageComponent} from '../SubPage/SubPage.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,SubPageComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
