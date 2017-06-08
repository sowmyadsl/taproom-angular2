import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }  from '@angular/forms';
import { AppComponent }   from './app.component';
import { NewKegComponent } from './new-keg.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,
  NewKegComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }