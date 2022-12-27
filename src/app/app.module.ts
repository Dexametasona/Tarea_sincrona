import { BodyModule } from './body/body.module';
import { HeaderModule } from './header/header.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Ejemplo01Component } from './ejemplo01/ejemplo01.component';

@NgModule({
  declarations: [
    AppComponent,
    Ejemplo01Component
  ],
  imports: [
    BrowserModule, FormsModule, HeaderModule, BodyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
