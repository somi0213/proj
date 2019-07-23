import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TravelComponent } from './../Travel/Travel.component';
import { UserComponent } from './../User/user.component';
import { HomeComponent } from './../Home/Home.component';
import { FeaturesComponent } from './../Features/features.component';
import { ContactComponent } from './../contact/contact.component';
import { ErrorComponent } from './../error/error.component';
import { RegisterComponent } from './../register/register.component';



@NgModule({
  declarations: [
    AppComponent, UserComponent,HomeComponent,FeaturesComponent,ContactComponent,ErrorComponent,RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
