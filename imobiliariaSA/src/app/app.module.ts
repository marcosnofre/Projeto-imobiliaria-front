import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './autenticador/login/login.component';
import {ReactiveFormsModule, FormsModule} from "@angular/forms";
import {Constantes} from "./util/constantes";
import { HomeComponent } from './paginas/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    Constantes
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
