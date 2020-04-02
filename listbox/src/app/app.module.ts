import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ListboxModule} from 'primeng/listbox';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListboxModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
